import React, { useState } from 'react';

const DELAY_BETWEEN_ANIMATION = 1000;

type ReturningValue = [
    JSX.Element,
    (pageName: string) => void
];

export default function useRoute(router: Map<string, JSX.Element>): ReturningValue {
    const [state, setState] = useState({
        page: router.get(router.keys().next()['value']) as JSX.Element,
        targetPage: router.keys().next()['value'],
        currentPage: router.keys().next()['value'],
        currentlyChange: false,
    });

    const changePage = (pageName: string) => {
        if (state.currentlyChange) return;
        if (!router.has(pageName)) throw `There is no ${pageName}`;

        // Set the target page
        setState({
            ...state,
            targetPage: pageName,
            currentlyChange: true
        });

        // Set the current page to animate out
        setState((state) => ({
            ...state,
            page: React.cloneElement(router.get(state.currentPage) as JSX.Element, {
                animateOut: true,
            })
        }));

        // After animation set the current page to target page with fade in animation

        setTimeout(() => {
            setState((state) => ({
                ...state,
                currentPage: state.targetPage,
                page: React.cloneElement(router.get(state.targetPage) as JSX.Element, {
                    animateIn: true
                })
            }));

            setTimeout(() => {
                // Reset animation status
                setState((state) => ({
                    ...state,
                    page: router.get(state.currentPage) as JSX.Element,
                    currentlyChange: false,
                }));

            }, DELAY_BETWEEN_ANIMATION);

        }, DELAY_BETWEEN_ANIMATION);
    };

    return [state.page, changePage];
}
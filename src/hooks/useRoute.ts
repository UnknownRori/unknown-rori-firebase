import React, { useState } from 'react';

type ReturningValue = [
    JSX.Element,
    (targetNumber: number) => void
];

export default function useRoute(listPage: JSX.Element[]): ReturningValue {
    const [state, setState] = useState({
        page: listPage[0],
        targetPageNumber: 0,
        currentPageNumber: 0,
        currentlyChange: false,
    });

    const changePage = (targetNumber: number) => {
        if (state.currentlyChange) return;

        // Set the target page
        setState({
            ...state,
            targetPageNumber: targetNumber,
            currentlyChange: true
        });

        // Set the current page to animate out
        setState((state) => ({
            ...state,
            page: React.cloneElement(listPage[state.currentPageNumber], {
                animateOut: true,
            })
        }));

        // After animation set the current page to target page with fade in animation

        setTimeout(() => {
            setState((state) => ({
                ...state,
                currentPageNumber: state.targetPageNumber,
                page: React.cloneElement(listPage[state.targetPageNumber], {
                    animateIn: true
                })
            }));

            setTimeout(() => {
                // Reset animation status
                setState((state) => ({
                    ...state,
                    page: listPage[state.currentPageNumber],
                    currentlyChange: false,
                }));

            }, 1000);

        }, 1000);
    };

    return [state.page, changePage];
}
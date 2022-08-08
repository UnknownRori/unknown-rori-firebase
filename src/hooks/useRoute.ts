import React, { useState } from 'react';

const DELAY_BETWEEN_ANIMATION = 1000;
const PAGE_NOT_FOUND = '404';
export type ChangePage = (pageName: string) => boolean;

type ReturningValue = [
    JSX.Element,
    ChangePage
];

/**
 * My custom implementation fade in & fade out router
 * @param  Map<string, JSX.Element> router
 * @return [JSX.Element, (pageName: string) => void]
 */
export default function useRoute(router: Map<string, JSX.Element>): ReturningValue {
    const path = window.location.pathname;

    const page = router.has(path) ? router.get(path) : router.get(PAGE_NOT_FOUND);
    const targetPage = router.has(path) ? path : PAGE_NOT_FOUND;
    const currentPage = router.has(path) ? path : PAGE_NOT_FOUND;

    const [state, setState] = useState({
        page: page as JSX.Element,
        targetPage: targetPage,
        currentPage: currentPage,
        currentlyChange: false,
    });

    /**
     * Change page API
     * @param pageName 
     * @returns void
     */
    const changePage = (pageName: string): boolean => {
        if (state.currentlyChange) return false;
        if (!router.has(pageName)) return changePage(PAGE_NOT_FOUND);

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

        return true;
    };

    return [state.page, changePage];
}
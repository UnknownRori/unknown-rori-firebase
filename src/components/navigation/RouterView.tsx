import { Suspense, useEffect, useState, useContext } from 'react';

import LoadingSpinner from '@/components/animation/LoadingSpinner';
import { RouterContext, RouterContextInner } from '@/hooks/useRoute';

function FallbackView() {
    const MAXIMUM_DOT = 3;

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < MAXIMUM_DOT) {
                setCount(count + 1);
            } else {
                setCount(0);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div id="loading" role="status" className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col">
                <div role="status" className="flex flex-col justify-center items-center">
                    <LoadingSpinner />
                    <span className="text-2xl tracking-wider">Please wait warmly{".".repeat(count)}</span>
                </div>
            </div>
        </div>
    );
}

export default function() {
    const routerContext = useContext(RouterContext) as RouterContextInner;

    return (
        <Suspense fallback={<FallbackView />}>
            {routerContext.page}
        </Suspense>
    );
}
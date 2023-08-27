import { Suspense, useEffect, useState } from 'react';

import LoadingSpinner from '@/components/animation/LoadingSpinner';

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
        }
    })

    return (
        <div id="profile" className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col">
                <div role="status" className="flex flex-col justify-center items-center">
                    <LoadingSpinner />
                    <span className="text-2xl tracking-wider">Please wait warmly{".".repeat(count)}</span>
                </div>
            </div>
        </div>
    )
}

export default function(props: { page: JSX.Element }) {
    return (
        <Suspense fallback={<FallbackView />}>
            {props.page}
        </Suspense>
    );
}
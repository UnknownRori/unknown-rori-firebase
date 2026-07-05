import { useEffect } from "react";

import { Message, MessageType } from "@/hooks/useToast";

const AUTO_REMOVE_DELAY = 5000;

type ToastCardProp = {
    removeToast: (id: number) => void,
    doneAnimate: (id: number) => void,
} & Message;

function getIconType(type: MessageType) {
    switch (type) {
        case "INFO":
            return (
                <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
            );
        case "ERROR":
            return (
                <svg className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path className="text-red-700" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case "WARNING":
            return (
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path className="text-yellow-600" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            );
    }
}

export default function ToastCard(props: ToastCardProp) {
    const Icon = getIconType(props.type);

    useEffect(() => {
        const timeoutAutoRemove = setTimeout(() => {
            props.removeToast(props.id);
        }, AUTO_REMOVE_DELAY);

        const timeoutSpawn = setTimeout(() => {
            props.doneAnimate(props.id);
        }, 0);

        return () => {
            clearTimeout(timeoutAutoRemove);
            clearTimeout(timeoutSpawn);
        };
    }, []);

    return (
        <div className={`flex justify-start items-center gap-2 py-2 px-1 rounded bg-opacity-70 shadow
            min:w-[34vw] sm:max-w-[68vw] md:max-w-[58vw] lg:max-w-[44vw] min-w-[24vw] z-[9999] duration-500
            ${props.animatedIn ? "opacity-0 translate-x-12" : props.removed ? "opacity-0 translate-x-12 pointer-events-none" : "opacity-100 translate-x-0"}
            bg-gray-700`}>

            <button onClick={() => props.removeToast(props.id)} className="absolute top-0 right-0 p-1">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            <span>
                {Icon}
            </span>

            <span className="p-1" dangerouslySetInnerHTML={{ __html: props.content }}>
            </span>
        </div>
    );
}
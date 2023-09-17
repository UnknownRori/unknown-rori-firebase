import { useEffect } from "react";
import useToast, { createMessage, ToastContext, ToastContextInner } from "@/hooks/useToast";

type Props = {} & React.PropsWithChildren;

export default function(props: Props) {
    const [push, animateDone, remove, queue] = useToast();

    const contextValue: ToastContextInner = {
        queue: queue,
        remove: remove,
        animateDone: animateDone,
        push: push,
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            push(createMessage("WARNING", "This site will be decommisioned, please go to <a class='text-blue-600 underline font-bold'href='https://unknownrori.vercel.app'>https://unknownrori.vercel.app</a> instead"));
        }, 1000);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <ToastContext.Provider value={contextValue}>
            {props.children}
        </ToastContext.Provider>
    )
}
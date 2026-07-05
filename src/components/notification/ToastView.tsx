import { useContext } from "react";

import { ToastContext, ToastContextInner } from "@/hooks/useToast";
import ToastCard from "./ToastCard";

export default function() {
    const context = useContext<ToastContextInner | null>(ToastContext);

    if (context == null) {
        throw new Error("Cannot get the context!");
    }

    return (
        <div className="absolute bottom-12 right-0 p-3 flex flex-col justify-center items-end gap-2 w-full overflow-x-hidden">
            <div className="relative flex flex-col gap-2">
                {context.queue.map((content) => {
                    return (
                        <ToastCard id={content.id} content={content.content} type={content.type} animatedIn={content.animatedIn}
                            removed={content.removed} key={content.id} removeToast={context.remove} doneAnimate={context.animateDone} />
                    );
                })}
            </div>
        </div>
    );
}
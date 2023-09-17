import generateId from "@/helpers/generateId";
import React, { useState, useEffect } from "react";

const EXPIRE_MESSAGE = 2000;

export type MessageType = "ERROR" | "INFO" | "WARNING";
export type Message = {
    id: number,
    type: MessageType,
    content: string,
    animatedIn: boolean,
    removed: boolean,
}

type PushMessage = (content: Message) => void;
type RemoveMessage = (id: number) => void;
type DoneAnimateMessage = (id: number) => void;

type ReturningValue = [
    PushMessage,
    DoneAnimateMessage,
    RemoveMessage,
    Array<Message>,
]

export type ToastContextInner = {
    queue: Array<Message>,
    push: PushMessage,
    animateDone: DoneAnimateMessage,
    remove: RemoveMessage,
};

export const ToastContext = React.createContext<ToastContextInner | null>(null)

export function createMessage(type: MessageType, content: string): Message {
    return {
        id: generateId(0, 100000),
        type: type,
        content: content,
        animatedIn: true,
        removed: false,
    }
}

export default function(): ReturningValue {
    const [queue, setQueue] = useState<Array<Message>>([]);

    function remove(id: number) {
        setQueue(queue.map((message) => {
            if (message.id == id) {

                message.removed = true;
                setTimeout(() => {
                    setQueue(queue.filter((a) => a.id !== id));
                }, EXPIRE_MESSAGE);
            }


            return message;
        }));
    }
    function push(content: Message) {
        setQueue([...queue, content]);
    }

    function doneAnimate(id: number) {
        setQueue(queue.map((message) => {
            if (message.id == id)
                message.animatedIn = false;

            return message;
        }))
    }

    return [push, doneAnimate, remove, queue];
}
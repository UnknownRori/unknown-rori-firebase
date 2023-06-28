import { useState } from "react";

export type ToggleState = () => void;
export type State = boolean;

/**
 * Custom hooks for toggle boolean state, it uses [`useState`] under the hood
 * 
 * @param boolean initialState 
 * @returns [`State`, `ToggleState`]
 */
export default function (initialState = false): [State, ToggleState] {
    const [state, setState] = useState(initialState);

    const toggleState = function () {
        setState(!state);
    };

    return [state, toggleState];
}
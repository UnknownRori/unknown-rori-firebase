import React from "react";
import { TypeAnimation } from "../animation/typeanimation";

export class ProfileIntro extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <TypeAnimation text="Hello There" className="text-3xl" />
            </>
        );
    }
}
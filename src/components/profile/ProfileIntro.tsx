import React from "react";
import { FadeInText } from "../animation/FadeInText";

export class ProfileIntro extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mx-auto text-center p-3 my-3">
                <FadeInText text="UnknownRori" className="text-5xl text-bold profile-name" />
                <FadeInText text="Hello! I am a Fullstack Developer" className="m-2 text-lg text-bold" />
            </div>
        );
    }
}
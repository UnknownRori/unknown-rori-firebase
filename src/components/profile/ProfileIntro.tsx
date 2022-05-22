import React from "react";

export class ProfileIntro extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mx-auto text-center p-3 my-3">
                <h3 className="text-5xl text-bold profile-name">
                    UnknownRori
                </h3>
                <p className="m-2 text-lg text-bold">
                    Hello! I am a Fullstack Developer
                </p>
            </div>
        );
    }
}
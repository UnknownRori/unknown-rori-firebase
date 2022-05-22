import React from "react";

export class ProfileIntro extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mx-auto text-center p-3 my-3">
                <h3 className="text-4xl text-bold">
                    Hi there!
                </h3>
                <p className="m-2">
                    I am UnknownRori, a junior fullstack web developer
                </p>
            </div>
        );
    }
}
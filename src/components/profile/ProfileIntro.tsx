import React from "react";
import ReactTypingEffect from 'react-typing-effect';

export class ProfileIntro extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mx-auto text-center p-3 my-3 flex flex-col">
                <ReactTypingEffect text={
                    ['UnknownRori', 'I am a Fullstack Developer.']
                    }
                    className="sm:text-2xl md:text-3xl lg:text-4xl text-bold"
                    displayTextRenderer={(text:string, i:number) => {
                        return (
                            <p className={i == 0 ? 'profile-name' : ''}>
                                {text}
                            </p>
                        );
                    }} typingDelay={500} />
            </div>
        );
    }
}
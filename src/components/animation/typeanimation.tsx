import React, { PropsWithoutRef } from "react";
import { TextAnimateType } from "../../interface/TypeAnimation";

export class TypeAnimation extends React.Component<TextAnimateType> {
    public state = {
        'text': this.props.text
    };

    render(): React.ReactNode {
        return (
            <>
                <p className={this.props.className}>{this.state.text}</p>
            </>
        );
    }
}
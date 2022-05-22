import React from "react";
import { InView } from "react-intersection-observer";
import { FadeText } from "../../interface/FadeText";

export class FadeInText extends React.Component<FadeText> {
    render(): React.ReactNode {
        return (
            <InView>
                {({ref, inView}) => (
                    <p ref={ref} className={`${this.props.className} ${inView ? 'animate-fadeIn' : 'animate-fadeIn'}`}>
                        {this.props.text}
                    </p>
                )}
            </InView>
        );
    }
}
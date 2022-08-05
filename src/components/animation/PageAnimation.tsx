import React from "react";
import { PageProps } from "../../types/Page";


export default abstract class PageAnimation extends React.Component<PageProps> {
    protected pageAnimation() {
        let animate = '';

        if (this.props.animateIn)
            animate = 'animate-fadeInLeft ';
        else if (this.props.animateOut)
            animate = 'animate-fadeOutLeft ';

        return animate;
    }
}
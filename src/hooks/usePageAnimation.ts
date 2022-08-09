import PageProps from "../types/PageProps";

type ReturningType = [string];

export default function usePageAnimation(props: PageProps): ReturningType {
    let animate = '';

    if (props.animateIn)
        animate = 'animate-fadeInLeft ';
    else if (props.animateOut)
        animate = 'animate-fadeOutLeft ';

    return [animate];
}
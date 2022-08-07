import { PageProps } from "../types/Page";

export default function usePageAnimation(props: PageProps): string {
    let animate = '';

    if (props.animateIn)
        animate = 'animate-fadeInLeft ';
    else if (props.animateOut)
        animate = 'animate-fadeOutLeft ';

    return animate;
}
import { LazyLoadImage as LazyLoad, LazyLoadImageProps } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function LazyLoadImage(props: LazyLoadImageProps) {
    return (
        <LazyLoad
            className={props.className}
            alt={props.alt}
            effect="blur"
            src={props.src} />
    );
} 
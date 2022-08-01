import { IconProps } from "../interface/Icon";

import github from '../asset/image/social/github.webp';
import stackoverflow from '../asset/image/social/stackoverflow.webp';
import twitter from '../asset/image/social/twitter.webp';

export default [
    { className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://github.com/UnknownRori", img: github, alt: "Github" },
    { className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://stackoverflow.com/users/13991588/unknownrori", img: stackoverflow, alt: "Stackoverflow" },
    { className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://twitter.com/UnknownRori", img: twitter, alt: "Twitter" },
] as IconProps[];
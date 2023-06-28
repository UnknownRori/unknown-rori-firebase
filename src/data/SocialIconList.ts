import IconProps from "@/types/Icon";

import github from '@/asset/image/social/github.webp';
import stackoverflow from '@/asset/image/social/stackoverflow.webp';
import twitter from '@/asset/image/social/twitter.webp';
import linkedin from '@/asset/image/social/linkedin.webp';

export default [
    { id: 1, className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://github.com/UnknownRori", img: github, alt: "Github" },
    { id: 2, className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://stackoverflow.com/users/13991588/unknownrori", img: stackoverflow, alt: "Stackoverflow" },
    { id: 3, className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://twitter.com/UnknownRori", img: twitter, alt: "Twitter" },
    { id: 4, className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://twitter.com/UnknownRori", img: linkedin, alt: "Linkedin" },
] as IconProps[];
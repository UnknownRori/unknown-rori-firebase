import IconProps from "../types/Icon";

import Bootstrap from "../asset/image/icons/bootstrap.webp";
import Laravel from "../asset/image/icons/laravel.webp";
import ReactIcon from "../asset/image/icons/react.webp";
import TailwindCSS from "../asset/image/icons/tailwind.webp";
import Typescript from "../asset/image/icons/typescript.webp";
import Vue from "../asset/image/icons/vue.webp";

export default [
    { id: 1, className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://getbootstrap.com/", img: Bootstrap, alt: "Bootstrap" },
    { id: 2, className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://laravel.com", img: Laravel, alt: "Laravel" },
    { id: 3, className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://reactjs.org/", img: ReactIcon, alt: "React" },
    { id: 4, className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://tailwindcss.com/", img: TailwindCSS, alt: "Tailwind CSS" },
    { id: 5, className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://typescriptlang.org/", img: Typescript, alt: "Typescript" },
    { id: 6, className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://vuejs.org/", img: Vue, alt: "Vue" },
] as IconProps[];
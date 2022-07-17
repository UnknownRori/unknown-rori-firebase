import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Bootstrap from "../../asset/image/icons/bootstrap.webp";
import Laravel from "../../asset/image/icons/laravel.webp";
import ReactIcon from "../../asset/image/icons/react.webp";
import TailwindCSS from "../../asset/image/icons/tailwind.webp";
import Typescript from "../../asset/image/icons/typescript.webp";
import Vue from "../../asset/image/icons/vue.webp";
import { IconProps } from "../../interface/Icon";
import { Icon } from "../social/Icon";

export class AboutMe extends React.Component {
    public state = {
        profile: {
            name: 'UnknownRori',
        },
        icons: [
            { className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://getbootstrap.com/", img: Bootstrap, alt: "Bootstrap" },
            { className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://laravel.com", img: Laravel, alt: "Laravel" },
            { className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://reactjs.org/", img: ReactIcon, alt: "React" },
            { className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://tailwindcss.com/", img: TailwindCSS, alt: "Tailwind CSS" },
            { className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://typescriptlang.org/", img: Typescript, alt: "Typescript" },
            { className: "rounded-lg w-10 md:w-14 hover:translate-y-2", href: "https://vuejs.org/", img: Vue, alt: "Vue" },
        ] as IconProps[]
    };

    render(): React.ReactNode {
        const skillIcons = this.state.icons.map((icon) =>
            <Icon className={icon.className} href={icon.href} img={icon.img} alt={icon.alt} />
        );

        return (
            <div className="bg-gray-700 rounded bg-opacity-75 p-4 mt-20">
                <div>
                    <ReactTypingEffect text={
                        ['About me']
                    }
                        className="md:text-2xl sm:text:lg lg:text-3xl underline my-10"
                        displayTextRenderer={(text: string) => {
                            return (
                                <h3 className="md:text-2xl sm:text:lg lg:text-3xl underline">
                                    {text}
                                </h3>
                            );
                        }} typingDelay={500} />
                </div>

                <article className="flex flex-row my-4 text-lg">
                    <p>
                        Hello my name is <span className="profile-name">UnknownRori</span>. I'm a college student and now i
                        currently learning to become fullstack developer, i enjoy making a web apps using Laravel and TailwindCSS.
                        I'm also interested on making software.
                    </p>
                </article>

                <div className="m-auto text-center mt-4 text-lg">
                    <div>
                        <ReactTypingEffect text={
                            ['My Skills']
                        }
                            className="md:text-2xl sm:text:lg lg:text-3xl underline my-10"
                            displayTextRenderer={(text: string) => {
                                return (
                                    <h3 className="md:text-2xl sm:text:lg lg:text-3xl underline">
                                        {text}
                                    </h3>
                                );
                            }} typingDelay={500} />
                    </div>
                    <p>
                        I been working on improving my PHP and Javascript skills for 2 years and
                        I'am very confident for working alongside with these tooling.
                    </p>

                    <div className="flex flex-row text-center justify-center flex-wrap md:w-[60%] mt-5 mx-auto">
                        {skillIcons}
                    </div>
                </div>



            </div>
        );
    }
}
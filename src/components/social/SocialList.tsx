import React from "react";
import { Icon } from './Icon';
import github from './../../asset/image/social/github.webp';
import stackoverflow from './../../asset/image/social/stackoverflow.webp';
import twitter from './../../asset/image/social/twitter.webp';
import { IconProps } from "../../interface/Icon";

export class SocialList extends React.Component {
    public state = {
        icons: [
            { className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://github.com/UnknownRori", img: github, alt: "Github" },
            { className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://stackoverflow.com/users/13991588/unknownrori", img: stackoverflow, alt: "Stackoverflow" },
            { className: "rounded-lg w-10 md:w-12 hover:translate-x-3", href: "https://twitter.com/UnknownRori", img: twitter, alt: "Twitter" },
        ] as IconProps[]
    };

    render(): React.ReactNode {
        const socialIconList = this.state.icons.map((icon) =>
            <Icon className={icon.className} href={icon.href} img={icon.img} alt={icon.alt} />
        );

        return (
            <>
                <h2 className="text-center">Link</h2>
                {socialIconList}
            </>
        );
    }
}

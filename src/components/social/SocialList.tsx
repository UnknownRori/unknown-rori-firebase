import React from "react";
import { Icon } from './Icon';
import SocialIconList from "../../data/SocialIconList";

export class SocialList extends React.Component {
    public state = {
        icons: SocialIconList
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

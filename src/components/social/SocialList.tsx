import React from "react";
import {Icon} from './Icon';
import github from './../../asset/image/social/github.webp';
import stackoverflow from './../../asset/image/social/stackoverflow.webp';
import twitter from './../../asset/image/social/twitter.webp';

export class SocialList extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Icon href='https://github.com/UnknownRori' img={github} alt='Github' />
                <Icon href='https://github.com/UnknownRori' img={stackoverflow} alt='Github' />
                <Icon href='https://github.com/UnknownRori' img={twitter} alt='Github' />
            </>
        );
    }
}
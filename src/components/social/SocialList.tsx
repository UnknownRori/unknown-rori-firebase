import React from "react";
import { Icon } from './Icon';
import github from './../../asset/image/social/github.webp';
import stackoverflow from './../../asset/image/social/stackoverflow.webp';
import twitter from './../../asset/image/social/twitter.webp';

export class SocialList extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <h2 className="text-center">Link</h2>
                <Icon className="hover:translate-x-3 rounded-lg w-12" href='https://github.com/UnknownRori' img={github} alt='Github' />
                <Icon className="hover:translate-x-3 rounded-lg w-12" href='https://stackoverflow.com/users/13991588/unknownrori' img={stackoverflow} alt='Stackoverflow' />
                <Icon className="hover:translate-x-3 rounded-lg w-12" href='https://twitter.com/UnknownRori' img={twitter} alt='Twitter' />
            </>
        );
    }
}

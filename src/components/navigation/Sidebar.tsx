import React from "react";
import { SocialList } from "../social/SocialList";
import arrow from './../../asset/image/white-arrow.webp';

export class Sidebar extends React.Component{
    render(): React.ReactNode {
        const text = '=>';
        return (
            <div className="top-44 fixed">
                <button className="button-secondary fixed m-3 -translate-x-4 w-12 transition-all duration-1000 group peer focus:translate-x-14 z-10">
                    <img src={arrow} alt="=>" className="group-focus:rotate-0 rotate-180 transition-all duration-1000" />
                </button>
                <div className="sidebar peer-focus:-translate-x-2">
                    <SocialList />
                </div>
            </div>
        );
    }
}
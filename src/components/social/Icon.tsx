import React from "react";
import { IconProps } from "./../interface/Icon";

export class Icon extends React.Component<IconProps> {
    render(): React.ReactNode {
        return (
            <a target='_blank' href={this.props.href} className='m-2'>
                <img className="rounded-lg w-6" src={this.props.img} alt={this.props.alt} />
            </a>
        );
    }
}
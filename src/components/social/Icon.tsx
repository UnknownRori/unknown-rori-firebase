import React from "react";
import { IconProps } from "../../interface/Icon";

export class Icon extends React.Component<{ icon: IconProps }> {
    render(): React.ReactNode {
        return (
            <a target='_blank' href={this.props.icon.href} className='m-2'>
                <img className={"duration-1000 transition-all " + this.props.icon.className}
                    src={this.props.icon.img} alt={this.props.icon.alt} />
            </a>
        );
    }
}
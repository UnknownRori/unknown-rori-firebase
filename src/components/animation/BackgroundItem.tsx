import React from "react";

export default class BackgroundItem extends React.Component<{ image: string, opacity: number }> {
    render(): React.ReactNode {
        return (
            <img src={this.props.image} style={{ 'opacity': this.props.opacity }} className='background' alt="" />
        );
    }
}
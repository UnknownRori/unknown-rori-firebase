import React from "react";
import profile from './../../asset/image/UnknownRori.webp';

export class ProfileImage extends React.Component {
    render(): React.ReactNode {
        return (
            <figure className="m-auto rounded-full p-3 shadow-lg">
                <img src={profile} alt="UnknownRori" 
                className="h-56 w-56 object-cover rounded-full border-2 border-gray-300"/>
            </figure>
        );
    }
}
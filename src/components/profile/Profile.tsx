import React from "react";
import { ProfileImage } from "./ProfileImage";
import { ProfileIntro } from "./ProfileIntro";

export class Profile extends React.Component {
    render(): React.ReactNode {
        return (
            <header id="profile" className="h-screen flex">
                <div className="flex sm:flex-col md:flex-col lg:flex-row self-center w-[100%]">
                    <div className="flex sm:m-4 lg:w-[50%] self-center items-center">
                        <ProfileImage />
                    </div>
                    <div className="flex flex-col sm:m-4 lg:w-[50%] text-center shadow-md">
                        <ProfileIntro />
                    </div>
                </div>
            </header>
        );
    }
}
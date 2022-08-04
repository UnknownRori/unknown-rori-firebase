import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileIntro from "./ProfileIntro";

export default class Profile extends React.Component {
    render(): React.ReactNode {
        return (
            <header id="profile" className="h-screen flex">
                <div className="flex flex-col self-center w-[100%]">
                    <ProfileImage />
                    <ProfileIntro />
                </div>
            </header>
        );
    }
}
import React from "react";
import PageAnimation from "../components/animation/PageAnimation";
import { Profile } from "../components/profile/Profile";

export default class MyProfilePage extends PageAnimation {
    render(): React.ReactNode {
        const animate = this.pageAnimation();

        return (
            <>
                <div className={"wrapper " + animate}>
                    <Profile />
                </div>
            </>
        );
    }
}
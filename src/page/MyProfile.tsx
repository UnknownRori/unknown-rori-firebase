import React from "react";
import { Background } from "../components/animation/Background";
import { Profile } from "../components/profile/Profile";

export class MyProfilePage extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Background />
                <div className="wrapper">
                    <Profile />
                </div>
            </>
        );
    }
}
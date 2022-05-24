import React from "react";
import { Background } from "../components/animation/Background";
import { Profile } from "../components/profile/Profile";
import { PageProps } from "../interface/Page";

export class MyProfilePage extends React.Component <PageProps> {
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
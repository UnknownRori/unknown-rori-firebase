import React from "react";
import { AboutMe } from "../components/aboutme/AboutMe";
import { PageAnimation } from "../components/animation/PageAnimation";

export class AboutMePage extends PageAnimation {
    render(): React.ReactNode {
        const animate = this.pageAnimation();

        return (
            <>
                <div className={"wrapper " + animate}>
                    <AboutMe />
                </div>
            </>
        );
    }
}
import React from "react";
import PageAnimation from "../components/animation/PageAnimation";
import ProjectsList from "../components/projects/ProjectsList";

export default class MyProjectsPage extends PageAnimation {
    render(): React.ReactNode {
        const animate = this.pageAnimation();

        return (
            <>
                <div className={"wrapper " + animate}>
                    <ProjectsList />
                </div>
            </>
        );
    }
}
import React from "react";
import { PageAnimation } from "../components/animation/PageAnimation";

export class MyProjectsPage extends PageAnimation {
    render(): React.ReactNode {
        const animate = this.pageAnimation();

        return (
            <>
                <div className={"wrapper " + animate}>
                    <h1 className="text-3xl">This place will be my project</h1>
                </div>
            </>
        );
    }
}
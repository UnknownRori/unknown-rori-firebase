import React from "react";
import { PageAnimation } from "../components/animation/PageAnimation";

export class AboutMePage extends PageAnimation {
    render(): React.ReactNode {
        const animate = this.pageAnimation();
        
        return (
            <>
                <div className={"wrapper " + animate}>
                    <h1 className="text-3xl">This place will be my about me</h1>
                </div>
            </>
        );
    }
}
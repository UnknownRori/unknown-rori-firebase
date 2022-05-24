import React from "react";
import { Background } from "../components/animation/Background";
import { PageProps } from "../interface/Page";

export class AboutMePage extends React.Component <PageProps> {
    render(): React.ReactNode {
        return (
            <>
                <Background />
            </>
        );
    }
}
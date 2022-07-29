import React, { ReactNode } from "react";
import { projectItem } from "../../interface/ProjectItem";

export class ProjectItem extends React.Component<{ project: projectItem }> {
    render(): ReactNode {
        return (
            <div title={this.props.project.description} className="group md:w-3/12 sm:w-6/12 m-5 p-5 
            bg-gray-700 bg-opacity-60 rounded-md shadow-2xl ring-1 ring-gray-400 duration-1000
            hover:z-20 hover:-translate-y-5 hover:bg-gray-800 hover:bg-opacity-95 hover:ring-gray-600 
            hover:shadow-md"
            >
                <p className="fixed pointer-events-none bg-gray-800 bg-opacity-80 rounded opacity-0 shadow-2xl w-[90%] group-hover:opacity-100 duration-1000">
                    {this.props.project.description}
                </p>
                <a href={this.props.project.link} target="_blank">
                    <img className="ring-1 ring-gray-700 rounded" src={this.props.project.image} alt={this.props.project.title} />
                    <h2 className="m-2 text-center md:text-xl sm:text-sm">
                        {this.props.project.title}
                    </h2>
                </a>
            </div>
        );
    }
}
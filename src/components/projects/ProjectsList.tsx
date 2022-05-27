import React from "react";
import { projectItem } from "../../interface/ProjectItem";
import { ProjectItem } from "./ProjectItem";
import UnknownRoriPHP from "../../asset/image/projects/php-framework.webp";

export class ProjectsList extends React.Component {
    public state = {
        projects: [
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel" },
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel" },
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel" },
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel" },
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel" },
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel" },
        ] as projectItem[],
    };

    render(): React.ReactNode {

        const projectsList: JSX.Element[] = this.state.projects.map((project) =>
            <ProjectItem project={project} key={project.id} />
        );

        return (
            <div className="flex flex-col">

                <div className="flex flex-row flex-wrap justify-center">
                    {projectsList}
                </div>

                <div className="group m-auto text-center p-2 bg-gray-700 bg-opacity-80 rounded-md hover:bg-gray-900 hover:bg-opacity-95 duration-1000">
                    <a className="flex flex-row justify-center"
                        href="https://github.com/UnknownRori" data-target="_blank">
                        <span>
                            Show All
                        </span>
                        <svg className="group-hover:translate-x-1 duration-1000 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}
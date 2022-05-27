import React from "react";
import { projectItem } from "../../interface/ProjectItem";
import { ProjectItem } from "./ProjectItem";
import UnknownRoriPHP from "../../asset/image/projects/php-framework.webp";
import TicTacToe from "../../asset/image/projects/basic-hotseat-tic-tac-toe.webp";
import Calculator from "../../asset/image/projects/basic-calculator.webp";
import PianoTiles from "../../asset/image/projects/piano-tiles.webp";
import PersonalPortfolio from "../../asset/image/projects/portfolio.webp";
import FakeECommerceApp from "../../asset/image/projects/fake-e-commerce-web-app.webp";
import ReactTypingEffect from "react-typing-effect";

export class ProjectsList extends React.Component {
    public state = {
        projects: [
            { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel." },
            { id: 2, title: 'Simple Tic Tac Toe', link: "https://unknownrori.github.io/simple-tic-tac-toe/", image: TicTacToe, description: "A simple tic tac toe multiplayer written in vanilla javascript." },
            { id: 3, title: 'Simple Calculator', link: "https://unknownrori.github.io/basic-online-calculator/", image: Calculator, description: "A simple calculator written in vanilla javascript." },
            { id: 4, title: 'Piano Tiles', link: "https://unknownrori.github.io/piano-tiles/", image: PianoTiles, description: "A rhythmic piano game written in typescript" },
            { id: 5, title: 'Personal Portfolio', link: "https://unknownrori-firebase.web.app/", image: PersonalPortfolio, description: "That's the page you viewing right now" },
            { id: 6, title: 'Fake E-Commerce', link: "https://github.com/UnknownRori/fake-e-commerce-laravel-app", image: FakeECommerceApp, description: "A simple commerce web app." },
        ] as projectItem[],
    };

    render(): React.ReactNode {

        const projectsList: JSX.Element[] = this.state.projects.map((project) =>
            <ProjectItem project={project} key={project.id} />
        );

        return (
            <div className="flex flex-col">
                <ReactTypingEffect text={["Projects", "Check out my github to see more!"]} className="mt-20 md:text-2xl lg:text-3xl sm:text-lg text-center" displayTextRenderer={(text: string, i: number) => {
                    return (
                        <p className={i == 0 ? 'profile-name' : ''}>
                            {text}
                        </p>
                    );
                }} />

                <div className="flex flex-row flex-wrap justify-center">
                    {projectsList}
                </div>

                <div className="my-10 group m-auto text-center p-2 bg-gray-700 bg-opacity-80 rounded-md hover:bg-gray-900 hover:bg-opacity-95 duration-1000">
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
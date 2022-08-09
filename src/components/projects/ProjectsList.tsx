import ProjectItem from "./ProjectItem";
import ReactTypingEffect from "react-typing-effect";
import ProjectListData from "../../data/ProjectList";

export default function ProjectList() {
    const projectListElement: JSX.Element[] = ProjectListData.map((project) =>
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
                {projectListElement}
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
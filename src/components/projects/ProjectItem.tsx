import ProjectItemProp from "@/types/ProjectItemProps";
import LazyLoadImage from "../animation/LazyLoadImage";

export default function (props: { project: ProjectItemProp }) {
    return (
        <div title={props.project.description} className="group lg:w-3/12 md:w-6/12 sm:w-8/12 
            m-5 p-5 bg-gray-700 bg-opacity-60 rounded-md shadow-2xl ring-1 ring-gray-400 duration-1000
            hover:z-20 hover:-translate-y-5 hover:bg-gray-800 hover:bg-opacity-95 hover:ring-gray-600 
            hover:shadow-md relative"
        >
            <p className="z-50 fixed pointer-events-none p-2 sm:text-sm md:text-md lg:text-md
                bg-gray-800 bg-opacity-80 rounded opacity-0 shadow-2xl sm:w-[89%] md:w-[86%] lg:w-[87%] 3xl:w-[92%]
                group-hover:opacity-100 duration-1000">
                {props.project.description}
            </p>
            <a href={props.project.link} target="_blank">
                <LazyLoadImage className="ring-1 ring-gray-700 rounded" src={props.project.image} alt={props.project.title} />
                <h2 className="m-2 text-center md:text-xl sm:text-sm">
                    {props.project.title}
                </h2>
            </a>
        </div>
    );
}

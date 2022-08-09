import ProjectsList from "../components/projects/ProjectsList";
import usePageAnimation from "../hooks/usePageAnimation";
import PageProps from "../types/PageProps";

export default function MyProjectsPage(props: PageProps) {
    const [animate] = usePageAnimation(props);

    return (
        <>
            <div className={"wrapper " + animate}>
                <ProjectsList />
            </div>
        </>
    );
}
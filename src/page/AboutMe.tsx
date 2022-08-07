import AboutMe from "../components/aboutme/AboutMe";
import usePageAnimation from "../hooks/usePageAnimation";
import { PageProps } from "../types/Page";

export default function AboutMePage(props: PageProps) {
    const animate = usePageAnimation(props);

    return (
        <>
            <div className={"wrapper " + animate}>
                <AboutMe />
            </div>
        </>
    );
}
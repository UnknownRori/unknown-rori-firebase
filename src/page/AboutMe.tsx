import usePageAnimation from "@/hooks/usePageAnimation";
import AboutMe from "@/components/aboutme/AboutMe";
import PageProps from "@/types/PageProps";

export default function AboutMePage(props: PageProps) {
    const [animate] = usePageAnimation(props);

    return (
        <div className={"wrapper " + animate}>
            <AboutMe />
        </div>
    );
}
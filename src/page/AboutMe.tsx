import PageProps from "@/types/PageProps";

import usePageAnimation from "@/hooks/usePageAnimation";

import AboutMe from "@/components/aboutme/AboutMe";

export default function AboutMePage(props: PageProps) {
    const [animate] = usePageAnimation(props);

    return (
        <>
            <div className={"wrapper " + animate}>
                <AboutMe />
            </div>
        </>
    );
}
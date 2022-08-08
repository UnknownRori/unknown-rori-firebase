import usePageAnimation from "../hooks/usePageAnimation";
import PageProps from "../types/PageProps";

export default function NotFound(props: PageProps) {
    const animate = usePageAnimation(props);

    return (
        <div className={"wrapper " + animate}>404</div>
    );
}
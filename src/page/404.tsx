import usePageAnimation from "../hooks/usePageAnimation";
import PageProps from "../types/PageProps";

export default function NotFound(props: PageProps) {
    const animate = usePageAnimation(props);

    return (
        <div className={"wrapper " + animate}>
            <div className="flex justify-center flex-col">
                <h1 className="text-center text-6xl">404</h1>
                <p className="text-center text-2xl">Page not found</p>
            </div>
        </div>
    );
}
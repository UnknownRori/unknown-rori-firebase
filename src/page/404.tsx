import usePageAnimation from "../hooks/usePageAnimation";
import useQuote from "../hooks/useQuote";
import PageProps from "../types/PageProps";


export default function NotFound(props: PageProps) {
    const [animate] = usePageAnimation(props);
    const [quote] = useQuote();

    return (
        <div className={"wrapper " + animate}>
            <div className="flex justify-center flex-col">
                <h1 className="text-center text-7xl">404</h1>
                <h2 className="text-center text-3xl">Page not found</h2>
                <h4 className="text-center text-lg">"{quote.text}"</h4>
                <p className="text-center italic">{quote.author}</p>
            </div>
        </div>
    );
}
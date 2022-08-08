import { useEffect, useState } from "react";
import usePageAnimation from "../hooks/usePageAnimation";
import PageProps from "../types/PageProps";
import QuoteAPI from '../types/QuoteAPI';

export default function NotFound(props: PageProps) {
    const animate = usePageAnimation(props);

    const [quote, setQuote] = useState<QuoteAPI>({
        text: '',
        author: '',
    });

    useEffect(() => {
        fetch('https://type.fit/api/quotes', {
            method: 'GET'
        }).then(response => response.json())
            .then((response) => {
                const data = response as QuoteAPI[];
                const rand = Math.floor(Math.random() * data.length);
                const randomQuote = data[rand];
                setQuote(randomQuote);
            });
    }, []);

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
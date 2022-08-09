import { useEffect, useState } from "react";
import QuoteAPI from '../types/QuoteAPI';

type ReturningValue = [QuoteAPI];

export default function useQuote(): ReturningValue {
    const [quote, setQuote] = useState<QuoteAPI>({
        text: '',
        author: '',
    });

    useEffect(() => {
        fetch('https://type.fit/api/quotes', {
            method: 'GET'
        })
            .then(response => response.json())
            .then((response) => {
                const data = response as QuoteAPI[];
                const rand = Math.floor(Math.random() * data.length);
                const randomQuote = data[rand];
                setQuote(randomQuote);
            })
            .catch(err => {
                console.error(err);
                setQuote({
                    text: 'Cannot load quote',
                    author: ''
                });
            });
    }, []);

    return [quote];
}
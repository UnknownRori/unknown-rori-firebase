import { useEffect, useState } from "react";

type BackgroundAnimationTypes = [
    number,
];

const useBackgroundAnimation = (BackgroundImages: string[]): BackgroundAnimationTypes => {
    const [state, setState] = useState({
        backgrounds: BackgroundImages,
        interval: 0,
    });

    const backgroundLength = state.backgrounds.length - 2;

    useEffect(() => {
        const interval = setInterval(() => {
            if (state.interval > backgroundLength)
                setState({ ...state, interval: 0 });
            else
                setState({
                    ...state,
                    interval: state.interval + 1,
                });

        }, 6000);

        return function () {
            clearInterval(interval);
        };
    }, [state]);

    return [state.interval];
};

export default useBackgroundAnimation;
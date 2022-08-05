import { useEffect, useState } from 'react';
import background1 from './../../asset/image/background/background1.webp';
import background2 from './../../asset/image/background/background2.webp';
import background3 from './../../asset/image/background/background3.webp';
import background4 from './../../asset/image/background/background4.webp';
import background5 from './../../asset/image/background/background5.webp';
import background6 from './../../asset/image/background/background6.webp';
import BackgroundItem from './BackgroundItem';

const BackgroundImages = [
    background1, background2, background3, background4, background5, background6
];

const Background = () => {
    const [state, setState] = useState({
        backgrounds: BackgroundImages,
        interval: 0,
        beforeInterval: BackgroundImages.length,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setState({
                ...state,
                interval: state.interval + 1,
                beforeInterval: state.beforeInterval + 1,
            });

            const backgroundLength = state.backgrounds.length - 2;

            if (state.interval > backgroundLength) {
                setState({ ...state, interval: 0 });
            }
            if (state.beforeInterval > backgroundLength) {
                setState({ ...state, beforeInterval: 0 });
            }
        }, 6000);

        return function () {
            clearInterval(interval);
        };
    }, [state]);

    const backgroundList = state.backgrounds.map((background, index) => {
        return (<BackgroundItem image={background} opacity={state.interval == index ? 1 : 0} key={index} />);
    });

    return (
        <div className='fixed background'>
            {backgroundList}
        </div>
    );
};

export default Background;
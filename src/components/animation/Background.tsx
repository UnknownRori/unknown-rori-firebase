import useBackgroundAnimation from '../../hooks/useBackgroundAnimation';
import BackgroundItem from './BackgroundItem';
import BackgroundImages from '../../data/Background';

const Background = () => {
    const [interval] = useBackgroundAnimation(BackgroundImages);
    const backgroundList = BackgroundImages.map((background, index) => {
        return (<BackgroundItem image={background} opacity={interval == index ? 1 : 0} key={index} />);
    });

    return (
        <div className='fixed background'>
            {backgroundList}
        </div>
    );
};

export default Background;
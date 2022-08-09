import useBackgroundAnimation from '../../hooks/useBackgroundAnimation';
import BackgroundItem from './BackgroundItem';
import BackgroundImages from '../../data/Background';

export default function Background() {
    const [interval] = useBackgroundAnimation(BackgroundImages);

    const backgroundList = BackgroundImages.map((background, index) =>
        <BackgroundItem image={background} opacity={interval == index ? 1 : 0} key={index} />
    );

    return (
        <div className='fixed background'>
            {backgroundList}
        </div>
    );
}
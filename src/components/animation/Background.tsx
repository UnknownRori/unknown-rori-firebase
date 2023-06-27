import useBackgroundAnimation from '@/hooks/useBackgroundAnimation';
import BackgroundImages from '@/data/Background';

import BackgroundItem from './BackgroundItem';

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
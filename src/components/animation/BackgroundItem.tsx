const BackgroundItem = (props: { image: string, opacity: number }) => {
    return (
        <img src={props.image} style={{ 'opacity': props.opacity }} className='background' alt="" />
    );
};

export default BackgroundItem;
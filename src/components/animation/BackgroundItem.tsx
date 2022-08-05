import BackgroundItemProps from "../../types/BackgroundItemProps";

const BackgroundItem = (props: BackgroundItemProps) => {
    return (
        <img src={props.image} style={{ 'opacity': props.opacity }} className='background' alt="" />
    );
};

export default BackgroundItem;
import BackgroundItemProps from "../../types/BackgroundItemProps";

export default function BackgroundItem(props: BackgroundItemProps) {
    return (
        <img src={props.image} style={{ 'opacity': props.opacity }} className='background' alt="" />
    );
}
import IconProps from "@/types/Icon";

export default function Icon(props: { icon: IconProps }) {
    return (
        <a target='_blank' href={props.icon.href} className='m-2'>
            <img className={"duration-1000 transition-all " + props.icon.className}
                src={props.icon.img} alt={props.icon.alt} />
        </a>
    );
}
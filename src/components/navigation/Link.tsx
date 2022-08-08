import LinkProps from '../../types/LinkProps';

export default function Link(props: LinkProps) {
    const action = (event: React.MouseEvent) => {
        event.preventDefault();
        if (props.changePage(props.href))
            window.history.pushState('', '', props.href);
    };

    return (
        <a onClick={action} href={props.href}
            className={props.className ? props.className : ''}
            style={props.style ? props.style : undefined}
        >
            {props.children}
        </a>
    );
}
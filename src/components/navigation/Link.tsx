import LinkProps from '../../types/LinkProps';

export default function Link(props: LinkProps) {
    const changePage = (pageName: string) => {
        props.changePage(pageName);
    };

    const action = (event: React.MouseEvent) => {
        event.preventDefault();
        window.history.pushState('', '', props.href);
        changePage(props.href);
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
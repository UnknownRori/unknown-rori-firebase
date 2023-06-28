import { useContext } from 'react';

import { ChangePage, RouterContext } from '@/hooks/useRoute';
import LinkProps from '@/types/LinkProps';

export default function Link(props: LinkProps) {
    const changePage = useContext(RouterContext) as ChangePage;

    const action = (event: React.MouseEvent) => {
        event.preventDefault();
        if (changePage(props.href))
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
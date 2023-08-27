import React from 'react';

import useRoute, { RouterContext } from "@/hooks/useRoute";

type Props = {
    router: Map<string, JSX.Element>,
} & React.PropsWithChildren;

export default function(props: Props) {
    const [currentPage, changePage] = useRoute(props.router);

    const contextValue = {
        page: currentPage,
        changePage: changePage,
    };

    return (
        <RouterContext.Provider value={contextValue}>
            {props.children}
        </RouterContext.Provider>
    );
}
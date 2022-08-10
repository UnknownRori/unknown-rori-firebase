import React from "react";

interface LinkProps extends React.PropsWithChildren {
    href: string,
    className?: string,
    style?: React.CSSProperties,
}

export default LinkProps;
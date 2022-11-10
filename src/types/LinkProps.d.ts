import React from "react";

type LinkProps = {
    href: string,
    className?: string,
    style?: React.CSSProperties,
} & React.PropsWithChildren;

export default LinkProps;
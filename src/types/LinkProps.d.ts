import React from "react";
import { ChangePage } from "../hooks/useRoute";

interface LinkProps extends React.PropsWithChildren {
    href: string,
    changePage: ChangePage,
    className?: string,
    style?: React.CSSProperties,
}

export default LinkProps;
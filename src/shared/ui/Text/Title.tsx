import "./font.scss"
import { CSSProperties, ReactNode } from "react";

export enum TitleType {
    Large = "large",
    Title = "title",
    SubTitle = "sub-title"
}

interface Props {
    children: ReactNode,
    type: TitleType,
    style?: CSSProperties
}

export const Title = ({children, style, type}: Props) => {
    return (
        <h1 className={type} style={style}>
            {children}
        </h1>
    )
}
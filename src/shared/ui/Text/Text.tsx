import "./font.scss"
import { HTMLAttributes, ReactNode } from "react";

export enum TextType {
	DefaultText = "default-text",
	SmallText = "small-text",
}

interface Props extends HTMLAttributes<HTMLElement>{
	children: ReactNode,
	type: TextType
}

export const Text = ({children, type}: Props) => {
    return (
        <p className={type}>
            {children}
        </p>
    )
}
import style from "./Button.module.scss"
import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode,
	className?: string
}

export const Button = (props: Props) => {

    const {
        children, className, ...otherProps
    } = props

    return (
        <button
            className={classNames(className, style.Button)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
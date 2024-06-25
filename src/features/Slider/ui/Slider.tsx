import styles from "./Slider.module.scss"
import { ReactNode } from "react";
import classNames from "classnames";

interface IProps {
	children: ReactNode,
	className?: string
}

export const Slider = ({children, className}: IProps) => {
    return (
        <div className={classNames(styles.Slider, className)}>
            {children}
        </div>
    )
}
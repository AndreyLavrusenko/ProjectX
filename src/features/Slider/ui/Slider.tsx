import styles from "./Slider.module.scss"
import { ReactNode } from "react";

interface IProps {
	children: ReactNode
}

export const Slider = ({children}: IProps) => {
    return (
        <div className={styles.Slider}>
            {children}
        </div>
    )
}
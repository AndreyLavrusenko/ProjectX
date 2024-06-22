import styles from "./InfoBlock.module.scss"
import classNames from "classnames";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export enum InfoBlockTheme {
    DEFAULT = "Default",
    PRIMARY = "Primary"
}

interface Props {
    theme?: InfoBlockTheme,
    children: ReactNode,
    text: string,
    buttonText: string,
    link: string,
}

export const InfoBlock = ({theme = InfoBlockTheme.DEFAULT, text, buttonText, link, children} : Props) => {
    return (
        <div className={classNames(styles.Tab, styles[theme])}>
            <h4 className={styles.Title}>{children}</h4>
            <p className={styles.Text}>{text}</p>
            <NavLink to={link} className={styles.Button}>{buttonText}</NavLink>
        </div>
    )
}
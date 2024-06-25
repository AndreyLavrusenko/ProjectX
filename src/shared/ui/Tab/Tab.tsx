import { ReactNode } from "react";
import classNames from "classnames";

import style from "./Tab.module.scss"

export interface Tabs {
	id?: number,
	name: string,
	link?: string,
}

interface Props {
	children: ReactNode,
	active?: boolean,
	className?: string
}

export const TabItem = ({children, className, active}: Props) => {
    return (
        <div className={classNames(style.Tab, {[style.active]: active}, className)}>
            {children}
        </div>
    )
}
import { Link as LinkDom } from "react-router-dom";
import { ReactNode } from "react";

import styles from "./Link.module.scss"
import { Text, TextType } from "../Text/Text";

interface Props {
	path: string,
	children: ReactNode,
}

export const Link = ({path, children}: Props) => {
    return (
        <LinkDom to={path} className={styles.Link}>
            <Text type={TextType.SmallText}>
                {children}
            </Text>
        </LinkDom>
    )
}
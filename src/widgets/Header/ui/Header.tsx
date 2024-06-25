import styles from "./header.module.scss"
import { ReactNode } from "react";
import { CoinsHeader } from "@/entities";
import { Title, TitleType } from "@/shared/ui/Text/Title";


interface Props {
    children: ReactNode
}

export const Header = (props: Props) => {
    const {children} = props

    return (
        <div className={styles.Header}>
            <Title type={TitleType.Title} style={{textTransform: "uppercase"}}>
                {children}
            </Title>

            <CoinsHeader />
        </div>
    )
}
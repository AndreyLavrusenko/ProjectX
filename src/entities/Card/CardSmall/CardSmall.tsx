import { ZIcon } from "../../../shared/assets/icons/ZIcon";

import styles from "./CardSmall.module.scss"

interface IProps {
    iconColor: string,
    title: string
}

export const CardSmall = ({iconColor, title}: IProps) => {
    return (
        <div className={styles.Card}>
            <img
                className={styles.CardImage}
                src="https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/small_image.png"
                alt=""
            />
            <div className={styles.CardZ}>
                <ZIcon color={iconColor} />
            </div>
            <p className={styles.CardTitle}>{title}</p>
        </div>
    )
}
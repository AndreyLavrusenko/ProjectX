import styles from "./CardFull.module.scss"
import { Title, TitleType } from "../../../shared/ui/Text/Title";
import { Text, TextType } from "../../../shared/ui/Text/Text";
import { useMemo } from "react";


interface ILinePosition {
    left?: string,
    right?: string,
    top?: string,
    bottom?: string,
    transform?: string,
    transformOrigin?: string
}

type LinePosition = "bottom_left" | "bottom_right" | "left_right" | "vertical_right"

type Theme = "default" | "green"

interface Props {
    imageUrl: string,
    title: string,
    linePosition: LinePosition
    theme: Theme
}

export const CardFullSize = ({imageUrl, title, linePosition, theme = "default"}: Props) => {

    const lineStyle: ILinePosition = useMemo(() => {
        if (linePosition === "bottom_left") {
            return {
                left: "0",
                bottom: "-40px",
                transform: "rotate(-33.565deg)",
                transformOrigin: "left bottom"
            }
        }

        if (linePosition === "bottom_right") {
            return {
                right: "-40px",
                bottom: "0",
                transform: "rotate(30)",
                transformOrigin: "top right"
            }
        }

        if (linePosition === "left_right") {
            return {
                left: "0",
                bottom: "-200px",
                transform: "rotate(300.565deg)",
                transformOrigin: "left bottom"
            }
        }

        if (linePosition === "vertical_right") {
            return {
                left: "-80px",
                top: "34px",
                transform: "rotate(90deg)",
                transformOrigin: "center"
            }
        }

    }, [linePosition])

    return (
        <div className={styles.Container}>
            <Title
                type={TitleType.Large}
                style={{textTransform: "uppercase"}}
            >
                {title}
            </Title>

            <img src={imageUrl} alt=""/>

            <button className={styles.Button}>
                <Text type={TextType.DefaultText}>
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.666626" width="26" height="25.6667" rx="12.8333"/>
                        <path
                            d="M19.75 12.3676C20.75 12.9449 20.75 14.3883 19.75 14.9657L10.75 20.1618C9.75 20.7392 8.5 20.0175 8.5 18.8628L8.5 8.47047C8.5 7.31577 9.75 6.59409 10.75 7.17144L19.75 12.3676Z"
                        />
                    </svg>

                    Старт
                </Text>
            </button>
            <div
                style={lineStyle}
                className={styles.Box}
            />
            
        </div>
    )
}
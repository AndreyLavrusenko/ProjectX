import styles from "./PlayButton.module.scss";
import { Text, TextType } from "../../Text/Text";
import { CSSProperties, useMemo } from "react";

type Theme = "default" | "green"

interface Props {
    text: string,
    style: CSSProperties,
    theme: Theme
}

export const PlayButton = ({text, style, theme}: Props) => {

    const buttonStyle = useMemo(() => {
        if (theme === "green") {
            return {
                backgroundColor: "#FFF",
                color: "#000000"
            }
        }
    }, [theme])

    const rect = useMemo(() => {
        if (theme === "green") {
            return {
                fill: "#42C64A"
            }
        }
    }, [theme])

    const path = useMemo(() => {
        if (theme === "green") {
            return {
                fill: "#FFF"
            }
        }
    }, [theme])

    const button = {...style, ...buttonStyle}

    return (
        <button className={styles.Button} style={button}>
            <Text type={TextType.DefaultText}>
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.666626" width="26" height="25.6667" rx="12.8333" style={rect}/>
                    <path
                        style={path}
                        d="M19.75 12.3676C20.75 12.9449 20.75 14.3883 19.75 14.9657L10.75 20.1618C9.75 20.7392 8.5 20.0175 8.5 18.8628L8.5 8.47047C8.5 7.31577 9.75 6.59409 10.75 7.17144L19.75 12.3676Z"
                    />
                </svg>

                {text}
            </Text>
        </button>
    )
}
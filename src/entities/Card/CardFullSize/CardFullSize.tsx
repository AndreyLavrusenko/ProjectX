import styles from "./CardFull.module.scss"
import { Title, TitleType } from "../../../shared/ui/Text/Title";
import { CSSProperties, useMemo } from "react";
import { PlayButton } from "../../../shared/ui/Button/PlayButton/PlayButton";


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

export const CardFullSize = ({imageUrl, title, linePosition, theme}: Props) => {

    const lineColor = useMemo(() => {
        if (theme === "green") {
            return {
                backgroundColor: "#FFF",
            }
        }

        return {
            backgroundColor: "#A5FF01",
        }

    }, [theme])

    const backgroundColor = useMemo(() => {
        if (theme === "green") {
            return {
                backgroundColor: "#42C64A",
            }
        }

        return {
            backgroundColor: "#4C4BD6",
        }
    }, [theme])

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
                transform: "rotate(30deg)",
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

    const buttonStyle: CSSProperties = useMemo(() => {
        return {
            position: "absolute",
            left: "15px",
            bottom: "45px",
        }
    }, [])

    const combinedStyles = { ...lineStyle, ...lineColor };

    return (
        <div className={styles.Container} style={backgroundColor}>
            <Title
                type={TitleType.Large}
                style={{textTransform: "uppercase"}}
            >
                {title}
            </Title>

            <img src={imageUrl} alt=""/>

            <PlayButton theme={theme} style={buttonStyle} text={"Старт"} />

            <div
                style={combinedStyles}
                className={styles.Box}
            />

        </div>
    )
}
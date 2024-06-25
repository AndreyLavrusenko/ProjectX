import { Text, TextType } from "@/shared/ui/Text/Text";
import { Slider } from "@/features/Slider";
import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./SliderWidget.module.scss"
import { Link } from "@/shared/ui/Link/Link";

interface Props {
	children: ReactNode,
	className?: string,
	title?: string,
	link?: string,
	path?: string
}

export const SliderWidget = (props: Props) => {
    const {children, title, className, link, path} = props

    return (
        <div className={classNames(className, styles.Slider)}>
            <div className={classNames(styles.TitleFlex)}>

                {
                    title && (
                        <Text type={TextType.DefaultText}>
                            {title}
                        </Text>
                    )
                }

                {
                    path && link && (
                        <Link path={path}>
                            {link}
                        </Link>
                    )
                }
				
            </div>

            <Slider>
                {children}
            </Slider>
        </div>
    )
}
import { Header } from "../../../widgets/Header/Header";
import { CardFullSize, CardSmall } from "../../../entities";
import { Link } from "../../../shared/ui/Link/Link";
import { Text, TextType } from "../../../shared/ui/Text/Text";

import styles from "./Home.module.scss"
import { Slider } from "../../../features/Slider";

export const Home = () => {
    return (
        <div className={styles.Page}>
            <Header>Главная</Header>
            <div className={styles.TitleFlex}>
                <Text type={TextType.DefaultText}>
                    Недавние тренировки
                </Text>
                <Link path={"/"}>
                    Посмотреть
                </Link>
            </div>
            <Slider>
                <CardSmall iconColor={"#42C64A"} title={"full body"} />
                <CardSmall iconColor={"#4C4BD6"} title={"full body"} />
                <CardSmall iconColor={"#FFE9AA"} title={"full body"} />
                <CardSmall iconColor={"#FEBBB7"} title={"full body"} />
            </Slider>

            <CardFullSize
                title="full body акцент на плечи"
                linePosition="bottom_left"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl.png"
                }
            />

            <CardFullSize
                title="full body корпус"
                linePosition="bottom_right"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl-abs.png"
                }
            />

            <CardFullSize
                title="full body руки"
                linePosition="left_right"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/man-arm.png"
                }
            />

            <CardFullSize
                title="утренняя растяжка"
                linePosition="vertical_right"
                theme="green"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/warmup.png"
                }
            />
        </div>
    )
}
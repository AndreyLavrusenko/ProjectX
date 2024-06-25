import { CardFullSize, CardSmall } from "@/entities";
import { Button } from "@/shared/ui/Button/PrimaryButton/Button";
import { ArrowIcon } from "@/shared/assets/icons/ArrowIcon";
import { InfoBlock, InfoBlockTheme } from "@/shared/ui/InfoBlock/InfoBlock";
import { Header } from "@/widgets/Header";
import { useHomeNavigate } from "@/pages/Home/model/hooks/useHomeNavigate";
import { SliderWidget } from "@/widgets/Slider";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

export const Home = () => {
    const {watchFeed} = useHomeNavigate()

    return (
        <div className="page">
            <Header>Главная</Header>

            <CardFullSize
                title="full body акцент на плечи"
                linePosition="bottom_left"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl.png"
                }
            />

            <SliderWidget title={"Недавние тренировки"} link="Посмотреть" path={"/"}>
                <CardSmall iconColor={"#42C64A"} title={"full body"} />
                <CardSmall iconColor={"#4C4BD6"} title={"full body"} />
                <CardSmall iconColor={"#FFE9AA"} title={"full body"} />
                <CardSmall iconColor={"#FEBBB7"} title={"full body"} />
            </SliderWidget>

            <CardFullSize
                title="утренняя растяжка"
                linePosition="vertical_right"
                theme="green"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/warmup.png"
                }
            />

            <InfoBlock
                theme={InfoBlockTheme.DEFAULT}
                text={"Перед основной тренировкой лучше уделить время разминке, что бы уменьшить риск возникновения травм"}
                link={"/"}
                buttonText={"Посмотреть"}
            >
                Начните с разминки
            </InfoBlock>

            <Button onClick={watchFeed}>
                Все тренировки
                <ArrowIcon />
            </Button>

        </div>
    )
}
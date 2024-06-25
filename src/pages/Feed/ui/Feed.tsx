import { Header } from "@/widgets/Header";
import { Tab } from "@/features/Tab";
import { Tabs } from "@/shared/ui/Tab/Tab";
import { Text, TextType } from "@/shared/ui/Text/Text";

import style from "./Filter.module.scss"
import { CardFullSize, CardSmall } from "@/entities";
import { InfoBlock, InfoBlockTheme } from "@/shared/ui/InfoBlock/InfoBlock";
import { SliderWidget } from "@/widgets/Slider";
import { Button } from "@/shared/ui/Button/PrimaryButton/Button";
import { ArrowIcon } from "@/shared/assets/icons/ArrowIcon";
import BookIcon from "@/shared/assets/icons/BookIcon";

export const Feed = () => {
    const tabs: Tabs[] = [
        {name: "Super Light"},
        {name: "Light"},
        {name: "Medium"},
        {name: "Hard"},
        {name: "Split"}
    ]

    return (
        <div className="page">
            <Header>Тренировки</Header>

            <div className={style.FilterBlock}>
                <Text type={TextType.DefaultText}>Фильтры</Text>
                <Tab tabs={tabs} />
            </div>

            <CardFullSize
                title="full body акцент на плечи"
                linePosition="bottom_left"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl.png"
                }
            />

            <InfoBlock
                theme={InfoBlockTheme.PRIMARY}
                text={"Перед основной тренировкой лучше уделить время разминке, что бы уменьшить риск возникновения травм"}
                link={"/"}
                buttonText={"Прислушаться"}
            >

                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0199 12.83L16.7999 11.61C16.5099 11.36 16.3399 10.99 16.3299 10.58C16.3099 10.13 16.4899 9.68 16.8199 9.35L18.0199 8.15C19.0599 7.11 19.4499 6.11 19.1199 5.32C18.7999 4.54 17.8099 4.11 16.3499 4.11H5.8999V3.25C5.8999 2.84 5.5599 2.5 5.1499 2.5C4.7399 2.5 4.3999 2.84 4.3999 3.25V21.75C4.3999 22.16 4.7399 22.5 5.1499 22.5C5.5599 22.5 5.8999 22.16 5.8999 21.75V16.87H16.3499C17.7899 16.87 18.7599 16.43 19.0899 15.64C19.4199 14.85 19.0399 13.86 18.0199 12.83Z" fill="white"/>
                </svg>

                Начните с разминки

            </InfoBlock>

            <SliderWidget title={"Super Light"}>
                <CardSmall iconColor={"#42C64A"} title={"full body"} />
                <CardSmall iconColor={"#4C4BD6"} title={"full body"} />
                <CardSmall iconColor={"#FFE9AA"} title={"full body"} />
                <CardSmall iconColor={"#FEBBB7"} title={"full body"} />
            </SliderWidget>


            <CardFullSize
                title="full body корпус"
                linePosition="bottom_right"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl-abs.png"
                }
            />

            <SliderWidget title={"Light"}>
                <CardSmall iconColor={"#42C64A"} title={"full body"} />
                <CardSmall iconColor={"#4C4BD6"} title={"full body"} />
                <CardSmall iconColor={"#FFE9AA"} title={"full body"} />
                <CardSmall iconColor={"#FEBBB7"} title={"full body"} />
            </SliderWidget>

            <InfoBlock
                theme={InfoBlockTheme.DEFAULT}
                text={"Перед основной тренировкой лучше уделить время разминке, что бы уменьшить риск возникновения травм"}
                link={"/"}
                buttonText={"Узнать"}
            >

                <BookIcon />

                Сколько нужно подходов?

            </InfoBlock>


            <CardFullSize
                title="full body руки"
                linePosition="left_right"
                theme="default"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/man-arm.png"
                }
            />

            <SliderWidget title={"Medium"}>
                <CardSmall iconColor={"#42C64A"} title={"full body"} />
                <CardSmall iconColor={"#4C4BD6"} title={"full body"} />
                <CardSmall iconColor={"#FFE9AA"} title={"full body"} />
                <CardSmall iconColor={"#FEBBB7"} title={"full body"} />
            </SliderWidget>

            <InfoBlock
                theme={InfoBlockTheme.DEFAULT}
                text={"Перед основной тренировкой лучше уделить время разминке, что бы уменьшить риск возникновения травм"}
                link={"/"}
                buttonText={"Узнать"}
            >

                <BookIcon />

                Увеличение нагрузки

            </InfoBlock>

            <SliderWidget title={"Hard"}>
                <CardSmall iconColor={"#42C64A"} title={"full body"} />
                <CardSmall iconColor={"#4C4BD6"} title={"full body"} />
                <CardSmall iconColor={"#FFE9AA"} title={"full body"} />
                <CardSmall iconColor={"#FEBBB7"} title={"full body"} />
            </SliderWidget>

            <Button>
                Все тренировки
                <ArrowIcon />
            </Button>

        </div>
    )
}
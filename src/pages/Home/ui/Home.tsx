import { Header } from "../../../widgets/Header/Header";
import { CardFullSize } from "../../../entities";

export const Home = () => {
    return (
        <div className={"page"}>
            <Header>Главная</Header>
            <CardFullSize
                title="full body акцент на плечи"
                linePosition="bottom_left"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl.png"
                }
            />

            <CardFullSize
                title="full body корпус"
                linePosition="bottom_right"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/girl-abs.png"
                }
            />

            <CardFullSize
                title="full body руки"
                linePosition="left_right"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/man-arm.png"
                }
            />

            <CardFullSize
                title="full body руки"
                linePosition="vertical_right"
                imageUrl={
                    "https://s3.timeweb.com/2b38a555-c1e9e5e2-6b9c-4b49-856a-259653d758ba/SPORT/CardIcon/warmup.png"
                }
            />
        </div>
    )
}
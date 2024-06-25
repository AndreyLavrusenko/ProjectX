import { Tabs, TabItem } from "@/shared/ui/Tab/Tab";
import { Slider } from "@/features/Slider";

interface Props {
	tabs: Tabs[]
}

export const Tab = ({tabs}: Props) => {
    return (
        <Slider>
            {tabs.map((item, index) => (
                <TabItem key={index} children={item.name} />
            ))}
        </Slider>
    );
}
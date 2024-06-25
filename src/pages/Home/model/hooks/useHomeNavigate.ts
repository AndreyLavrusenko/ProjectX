import { useNavigate } from "react-router-dom";
import { RouterPath } from "@/shared/config/routerConfig/routerConfig";

export const useHomeNavigate = () => {
    const  navigate = useNavigate()

    const watchFeed = () => {
        navigate(RouterPath.feed)
    }

    return {
        watchFeed
    }
}
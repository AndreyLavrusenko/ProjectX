import { RouteProps } from "react-router-dom";
import { Home } from "../../../pages/Home";

export enum AppRoutes {
	HOME = "home",
	SELECT_WORKOUT = "option",
	WORKOUT = "workout",
	FINISH = "finish",
	NOT_FOUND = "not_found"
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.SELECT_WORKOUT]: "/select/:id",
    [AppRoutes.WORKOUT]: "/workout/:id",
    [AppRoutes.FINISH]: "/finish",
    [AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RouterPath.home,
        element: <Home />
    },
    [AppRoutes.SELECT_WORKOUT]: {
        path: RouterPath.option,
        element: <Home />
    },
    [AppRoutes.WORKOUT]: {
        path: RouterPath.workout,
        element: <Home />
    },
    [AppRoutes.FINISH]: {
        path: RouterPath.finish,
        element: <Home />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <Home />
    }
}

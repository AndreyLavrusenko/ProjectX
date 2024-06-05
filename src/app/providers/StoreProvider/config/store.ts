import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({}); // Пустой объект

export function createReduxStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: true, // TODO в проде нужно убрать
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

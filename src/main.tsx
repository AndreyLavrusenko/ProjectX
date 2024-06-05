import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import "./app/styles/global.scss";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<StoreProvider>*/}
            <App />
            {/*</StoreProvider>*/}
        </BrowserRouter>
    </React.StrictMode>,
)

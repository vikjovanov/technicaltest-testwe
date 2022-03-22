import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./RootReducer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider store={store}>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

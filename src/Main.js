import React from "react";
import App from "./App";
import store from "./components/Store/Store";
import { Provider } from "react-redux";

const Main = () => {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    )
};

export default Main;

import "./index.css";
// React
import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

// React Redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

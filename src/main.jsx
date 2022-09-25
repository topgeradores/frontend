import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import './index.css';

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>,
    document.getElementById("root")
);

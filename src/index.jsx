import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
//BrowserRouter to HashRouter for github deploy
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

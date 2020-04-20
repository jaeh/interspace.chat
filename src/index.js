import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "./contexts/ThemeContext";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto:100,300,400,500,700,900", "sans-serif"],
  },
});

ReactDOM.render(
  <ThemeProvider>
    <Global
      styles={css`
        * {
          margin: 0px;
          padding: 0px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-weight: 300;
          font-size: 14px;
        }
        body {
          margin: 0px;
          padding: 0px;
          color: whitesmoke;
          background-color: black;
        }
        .click-zone {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

          & :hover {
            text-shadow: 10px 10px 10px black;
            filter: saturate(0%);
            cursor: pointer;
          }
        }
      `}
    />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Kata2 from "../src/components/kata2";
import Navbar from "../src/components/kata3";
import Main from "../src/components/kata4";
import ListTasks from "../src/components/kata6";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00BFB3",
    },
    secondary: {
      main: "#75787B",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

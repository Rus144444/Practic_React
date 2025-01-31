import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { App } from "./component/App/App";

const theme = {
  color: {
    white: "#ffffff",
    black: "#010101",
    green: "#4caf50",
    red: "#f44336",
    blue: "#2196f4",
    primaryText: "#212121",
    secondaryText: "#757575",
  },
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

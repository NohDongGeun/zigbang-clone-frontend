import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import "./styles/styles.css";
import ApolloWrapper from "./utils/ApolloWrapper";

ReactDOM.render(
  <React.StrictMode>
    <ApolloWrapper>
      <App />
    </ApolloWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

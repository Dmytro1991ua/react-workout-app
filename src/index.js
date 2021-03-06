import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WorkoutsProvider } from "./WorkoutsContext";

ReactDOM.render(
  <WorkoutsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WorkoutsProvider>,
  document.getElementById("root")
);

reportWebVitals();

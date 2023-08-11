import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./context/ResultContextProvider";
import "./global.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);

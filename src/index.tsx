import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const el = document.getElementById("root");
if (!el) {
  throw new Error("Could not find root element");
}

const root = ReactDOM.createRoot(el);
root.render(<App />);

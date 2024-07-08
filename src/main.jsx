import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App.jsx";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

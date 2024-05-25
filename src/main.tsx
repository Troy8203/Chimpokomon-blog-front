import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Navbar.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);

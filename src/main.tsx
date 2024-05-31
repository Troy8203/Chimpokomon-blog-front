import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import Blog from "./pages/Blog.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Blog />
  </React.StrictMode>
);

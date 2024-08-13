import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Navbar.tsx";
import FormRegister from "./components/FormRegister.tsx";
import Blog from "./pages/Blog.tsx";
import "./index.css";

import Layoud from "./layoud.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    {/* <Blog /> */}

    <Layoud>
      <FormRegister />
    </Layoud>
  </React.StrictMode>
);

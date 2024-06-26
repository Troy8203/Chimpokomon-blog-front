import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/Navbar.tsx";
import Blog from "./pages/Blog.tsx";
import BlogShow from "./pages/BlogShow.tsx";
import NotFound from "./pages/NotFound.tsx";
import ListBlog from "./pages/Blogs/ListBlog.tsx";
import ShowBlog from "./pages/Blogs/ShowBlog.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />}>
          <Route index element={<ListBlog />} />
          <Route path=":id" element={<ShowBlog />} />
        </Route>
        <Route path="contact" element={<BlogShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

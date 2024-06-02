import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./module/blogs/blog/Blog.tsx";
import NewBlog from "./module/blogs/Page/NewBlogPage.tsx";
import BlogPage from "./module/blogs/Page/BlogPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/new",
        element: <NewBlog />,
      },
      {
        path: "/blogs/:id",
        element: <Blog />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

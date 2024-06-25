import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./module/blogs/blog/Blog.tsx";
import NewBlog from "./module/blogs/Page/NewBlogPage.tsx";
import BlogPage from "./module/blogs/Page/BlogPage.tsx";
import LoginPage from "./module/login/page/LoginPage.tsx";
import LoginForm from "./module/login/components/form/LoginForm.tsx";
import SignupForm from "./module/login/components/form/SignupForm.tsx";

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
  {
    path: "/auth",
    element: <LoginPage />,
    children: [
      {
        path: "/auth/login",
        element: <LoginForm />,
      },
      {
        path: "/auth/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

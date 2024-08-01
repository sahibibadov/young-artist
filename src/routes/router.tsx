import PageNotFound from "@/pages/PageNotFound.tsx";
import { Router } from "@remix-run/router";
import Home from "@/pages/root/Home";
import Contact from "@/pages/root/Contact";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/RootLayout.tsx";
import About from "@/pages/root/About";
import Authlayout from "@/layout/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Cart from "@/pages/root/Cart";

const router: Router = createBrowserRouter([
  // root layout
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },

  // auth layout
  {
    element: <Authlayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // admin layout

  // 404 page sehifesi
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

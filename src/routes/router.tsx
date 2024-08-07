import PageNotFound from "@/pages/PageNotFound.tsx";
import { Router } from "@remix-run/router";
import Home from "@/pages/root/Home/Home";
import Contact from "@/pages/root/Contact";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/RootLayout.tsx";
import About from "@/pages/root/About";
import Authlayout from "@/layout/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Cart from "@/pages/root/Cart";
import ProductDetailPage from "@/pages/root/ProductDetailPage";
import FavoritePage from "@/pages/root/FavoritePage";

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
        path: "/product/:id",
        element: <ProductDetailPage />,
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
      {
        path: "/favorite",
        element: <FavoritePage />,
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

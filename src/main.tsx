import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import SmoothProvider from "./components/shared/SmoothProvider";
import Cursor from "@/components/shared/cursor-framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SmoothProvider>
      <Cursor />
      <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
    </SmoothProvider>
  </React.StrictMode>
);

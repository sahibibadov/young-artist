import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import SmoothProvider from "./components/shared/SmoothProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SmoothProvider>
      <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
    </SmoothProvider>
  </React.StrictMode>
);

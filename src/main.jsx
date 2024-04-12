import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Components/Navigation/Routes";
import AuthConfigProvider from "./Hooks/AuthConfigProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthConfigProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthConfigProvider>
    </HelmetProvider>
  </React.StrictMode>
);

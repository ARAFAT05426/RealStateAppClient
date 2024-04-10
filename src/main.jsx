import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Components/Navigation/Routes";
import AuthConfigProvider from "./Hooks/AuthConfigProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthConfigProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthConfigProvider>
  </React.StrictMode>
);

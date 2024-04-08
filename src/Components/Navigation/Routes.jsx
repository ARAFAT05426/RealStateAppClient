import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Header from "../Pages/Header";
import Property from "../Pages/Property";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <>I am error</>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: '/property',
        element: <Property></Property>
      }
    ],
  },
]);
export default routes;

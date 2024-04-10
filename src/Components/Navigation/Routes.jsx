import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import SignUp from "../Pages/SignUp";
import UpdateProfile from "../Pages/UpdateProfile";
import Contact from "../Pages/Contact";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";
import Properties from './../Pages/Properties';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <>I am error</>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/estates/:id",
        element: <EstateDetails></EstateDetails>,
        loader: async() => await fetch('/Data.json')
      },
    ],
  },
]);
export default routes;

import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import SignUp from "../Pages/SignUp";
import UpdateProfile from "../Pages/UpdateProfile";
import Contact from "../Pages/Contact";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";
import Properties from './../Pages/Properties';
import Error from "../Pages/Error";
import Classified from "../Pages/Classified";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: <Classified><UpdateProfile/></Classified>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/estates/:id",
        element: <Classified><EstateDetails/></Classified>,
        loader: async() => await fetch('/Data.json')
      },
    ],
  },
]);
export default routes;

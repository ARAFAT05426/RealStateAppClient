import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import SignUp from "../Pages/SignUp";
import Apartments from "../Pages/Apartments";
import UpdateProfile from "../Pages/UpdateProfile";
import Contact from "../Pages/Contact";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";

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
        path: "/apartments",
        element: <Apartments></Apartments>,
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
        loader: () => fetch('Data.json')
      },
    ],
  },
]);
export default routes;

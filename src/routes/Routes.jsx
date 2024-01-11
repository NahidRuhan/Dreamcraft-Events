import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import Venues from "../pages/Venues/Venues";
import Error from "../pages/Error/Error";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>,
        },
        {
            path: "/venues",
            element: <Venues></Venues>,
            loader: () => fetch('/venues.json')
        },
        {
            path: "/news/:id",
            element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>,
            // loader: () => fetch('/upcomingEvent.json')
            loader: () => fetch('/data.json'),
        },
      ],
    },
  ]);

  export default router;
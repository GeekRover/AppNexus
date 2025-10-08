import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Apps from "../Pages/Apps";
import Installaion from "../Pages/Installaion";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/apps',
          Component: Apps
        },
        {
          path: '/installations',
          Component: Installaion
        }
    ] 
  },
]);

export default router
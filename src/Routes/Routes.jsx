import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: '/',
            element: <h1>This is HomePage</h1>
        }
    ] 
  },
]);

export default router
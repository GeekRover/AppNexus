import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Apps from "../Pages/Apps";
import Installaion from "../Pages/Installaion";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("./appData.json"),
        element: <Home></Home>,
      },

      {
        path: "/apps",
        loader: ()=> fetch("./appData.json"),
        errorElement: <div>App not found</div>,
        Component: Apps,
      },
      {
        path: "/installations",
        Component: Installaion,
      },
      {
        path: "/:appID",
        loader: async ({ params }) => {
          const res = await fetch("/appData.json");
          const data = await res.json();

          const app = data.find((item) => item.id === Number(params.appID));

          if (!app) {
            throw new Response("App Not Found", { status: 404 });
          }

          return app;
        },
        Component: AppDetails,
      },
    ],
  },
]);

export default router;

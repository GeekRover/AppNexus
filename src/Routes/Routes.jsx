import { createBrowserRouter, Link } from "react-router";
import Root from "../Pages/Root";
import Apps from "../Pages/Apps";
import Installaion from "../Pages/Installaion";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import ErrorIcon from '/assets/App-Error.png'

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
        errorElement: <div className="w-full h-dvh flex flex-col justify-center items-center gap-5">
          <img src={ErrorIcon} alt="" />
          <h1 className="font-semibold text-5xl">OPPS!! APP NOT FOUND</h1>
          <p className="text-xl text-[#627382]">The App you are requesting is not found on our system.  please try another apps</p>
          <Link to={'/'}>
          <button className="btn btn-secondary">Go Back!</button>
          </Link>
        </div>,
        Component: AppDetails,
      },
    ],
  },
]);

export default router;

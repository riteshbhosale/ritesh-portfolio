import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/404/PageNotFound";

const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ];

const Routes = () => {
  const route = useRoutes(routes);
  return route;
};

export default Routes;

import { Suspense, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("../pages/home/Home"));
const PageNotFound = lazy(() => import("../pages/404/PageNotFound"));
const Projects = lazy(() => import("../pages/home/projects"));
const ChatApp = lazy(() => import("../pages/home/projects/chat-app"));

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "projects",
        element: (
          <Projects>
            <Outlet />
          </Projects>
        ),
        children: [{ path: "chat-app", element: <ChatApp /> }],
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
];

const Routes = () => {
  const route = useRoutes(routes);
  return route;
};

export default Routes;

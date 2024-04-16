import { IRoute } from "@/@types/routes";
import { lazy } from "preact/compat";

const Home = lazy(() => import("@/pages/Home"));

const Auth = lazy(() => import("@/pages/Auth"));
const Login = lazy(() => import("@/pages/Auth/Login"));
const Register = lazy(() => import("@/pages/Auth/Register"));

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Session = lazy(() => import("@/pages/Session"));
const Sheets = lazy(() => import("@/pages/Sheets"));
const Editor = lazy(() => import("@/pages/Editor"));

const Unauthorized = lazy(() => import("@/pages/Fallbacks/401"));
const Forbidden = lazy(() => import("@/pages/Fallbacks/403"));
const NotFound = lazy(() => import("@/pages/Fallbacks/404"));

export const Routes: IRoute[] = [
  {
    header: "home",
    path: "/",
    element: Home,
    hideTransition: true,
  },
  {
    header: "auth",
    path: "/auth",
    element: Auth,
    children: [
      {
        header: "login",
        path: "/login",
        element: Login,
      },
      {
        header: "register",
        path: "/register",
        element: Register,
      },
    ],
  },
  {
    header: "dashboard",
    path: "/dashboard",
    element: Dashboard,
    children: [
      {
        header: "sheets",
        path: "/sheets",
        element: Sheets,
      },
      {
        header: "session",
        path: "/session",
        element: Session,
      },
      {
        header: "editor",
        path: "/editor",
        element: Editor,
      },
    ],
  },
  {
    header: "unauthorized",
    path: "/401",
    element: Unauthorized,
    hideTransition: true,
  },
  {
    header: "forbidden",
    path: "/403",
    element: Forbidden,
    hideTransition: true,
  },
  {
    header: "notfound",
    path: "*",
    element: NotFound,
    hideTransition: true,
  },
];

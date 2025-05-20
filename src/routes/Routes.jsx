import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import AddRecipe from "../pages/addRecipe/AddRecipe";
import Loading from "../components/shared/Loading";
import AllRecipes from "../pages/allRecipes/AllRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/addRecipe",
        element: (
          <PrivateRoutes>
            <AddRecipe />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/allRecipes",
        Component: AllRecipes,
      },
    ],
  },
]);

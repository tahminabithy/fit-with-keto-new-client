import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import PostDetails from "../pages/postDetails/postDetails";
import LifeStyles from "../pages/LifeStyles/LifeStyles";
import Recipes from "../pages/Recipes/Recipes";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/postDetails/:id",
        element: <PostDetails />,
      },
      {
        path: "/lifestyle",
        element: <LifeStyles />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default Router;

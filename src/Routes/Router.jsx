import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import PostDetails from "../pages/postDetails/postDetails";
import LifeStyles from "../pages/LifeStyles/LifeStyles";
import Recipes from "../pages/Recipes/Recipes";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./privateRoute";
import Shop from "../pages/Shop/Shop";
import ShopDetails from "../pages/ShopDetails/ShopDetails";
import OrderSummary from "../pages/OrderSummary/OrderSummary";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/postDetails/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ShopDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/order-summary",
        element: (
          <PrivateRoute>
            {" "}
            <OrderSummary />
          </PrivateRoute>
        ),
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

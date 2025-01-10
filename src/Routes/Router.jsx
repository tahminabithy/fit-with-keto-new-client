import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import PostDetails from "../pages/postDetails/postDetails";
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
    ],
  },
]);
export default Router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import Error from "../Pages/ErrorPage/Error";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/toysDetail/:id",
        element: (
          <PrivetRoutes>
            <ToysDetails />
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://figlandia-server-ismailjihad29.vercel.app/toys/${params.id}`),
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch("https://figlandia-server-ismailjihad29.vercel.app/toys"),
      },
      {
        path: "/add-toys",
        element:<PrivetRoutes> <AddToys /></PrivetRoutes>,
      },
      {
        path: "/mytoys",
        element: (
          <PrivetRoutes>
            <MyToys />
          </PrivetRoutes>
        ),
        loader: () => fetch('https://figlandia-server-ismailjihad29.vercel.app/toys'),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoutes>
            <UpdateToy/>
          </PrivetRoutes>
        ),
        loader: ({params}) => fetch(`https://figlandia-server-ismailjihad29.vercel.app/toys/${params.id}`),
      },
      {
        path: "/blog",
        element:<Blog/>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

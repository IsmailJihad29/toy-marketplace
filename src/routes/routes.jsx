import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import Error from "../Pages/ErrorPage/Error";
import AllToys from "../Pages/Home/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/toysDetail/:id",
        element: <ToysDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: "/add-toys",
        element: < AddToys/>

      }
    ],
  },
]);

export default router;

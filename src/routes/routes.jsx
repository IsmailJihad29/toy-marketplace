import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import { Children } from "react";
import Main from "../Layout/Main";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
  

const router = createBrowserRouter([
    {
      path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element:<Home/>
          },
            {
                path: "/toys/:id",
                element: <ToysDetails />,
                loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
          },
      ]
    },
]);
  
export default router;
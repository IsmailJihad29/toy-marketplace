import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import { Children } from "react";
import Main from "../Layout/Main";
  

const router = createBrowserRouter([
    {
      path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element:<Home/>
          }
      ]
    },
]);
  
export default router;
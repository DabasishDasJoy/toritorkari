import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

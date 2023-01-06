import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
]);

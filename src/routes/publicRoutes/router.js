import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import ProductDetails from "../../pages/ProductDetails/ProductDetails/ProductDetails";

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
      {
        path: "/product",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/user/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/user/dashboard",
            element: <Dashboard></Dashboard>,
          },
        ],
      },
    ],
  },
]);

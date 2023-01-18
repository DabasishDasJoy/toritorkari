import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Category from "../../pages/Category/Category/Category";
import Checkout from "../../pages/Checkout/Checkout/Checkout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import Invoice from "../../pages/Invoice/Invoice/Invoice";
import Offers from "../../pages/Offers/Offers/Offers";
import ProductDetails from "../../pages/ProductDetails/ProductDetails/ProductDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/invoice",
        element: <Invoice></Invoice>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
          </PrivateRoutes>
        ),
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

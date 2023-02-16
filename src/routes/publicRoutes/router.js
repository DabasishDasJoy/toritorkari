import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Category from "../../pages/Category/Category/Category";
import Checkout from "../../pages/Checkout/Checkout/Checkout";
import ContactUs from "../../pages/ContactUs/ContactUs";
import CustomerService from "../../pages/CustomerService/CustomerService";
import ChangePassword from "../../pages/Dashboard/ChangePassword/ChangePassword";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import UpdateProfile from "../../pages/Dashboard/UpdateProfile/UpdateProfile";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FaQ/FAQ";
import Home from "../../pages/Home/Home/Home";
import Invoice from "../../pages/Invoice/Invoice/Invoice";
import Offers from "../../pages/Offers/Offers/Offers";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import ProductDetails from "../../pages/ProductDetails/ProductDetails/ProductDetails";
import SearchResult from "../../pages/SearchResult/SearchResult";
import Sell from "../../pages/Sell/Sell";
import TermsAndCondition from "../../pages/TermsAndConditions/TermsAndCondition";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
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
        path: "/invoice/:uid",
        element: <Invoice></Invoice>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/search",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/sell",
        element: <Sell></Sell>,
      },
      {
        path: "/customer-service",
        element: <CustomerService></CustomerService>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
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
          {
            path: "/user/dashboard/myorders",
            element: <MyOrders></MyOrders>,
          },
          {
            path: "/user/dashboard/updateProfile",
            element: <UpdateProfile></UpdateProfile>,
          },
          {
            path: "/user/dashboard/changepassword",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
]);

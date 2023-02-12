import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import axios from "../../../AxiosInstance/AxiosInstance";
import EmptyOrders from "../../../components/EmptyOrders/EmptyOrders";
import Loader from "../../../components/Loader/Loader";
import OrdersStatistics from "../../../components/OrdersStatistics/OrdersStatistics";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const {
    isLoading,
    error,
    refetch,
    data: { data: invoices } = [],
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: () => {
      return axios.get(`/invoices?email=${user?.email}`);
    },
  });

  return (
    <div className="bg-white w-full flex flex-col gap-5 p-5">
      <Helmet>
        <title>ToriTorkari Bazar - Dashboard</title>
        <meta name="description" content="User dashboard." />
      </Helmet>
      {isLoading ? (
        <Loader></Loader>
      ) : invoices?.length ? (
        <>
          <h4 className="text-base text-gray-700 font-semibold leading-none">
            Dashboard
          </h4>
          <OrdersStatistics></OrdersStatistics>

          <div className="overflow-x-auto text-gray-700 border text-center">
            <table className="w-full">
              {/* <!-- head --> */}
              <thead className="bg-secondary">
                <tr>
                  <th>Invoice</th>
                  <th>Date</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {invoices?.map((invoice) => (
                  <tr key={invoice?._id}>
                    <th>{invoice?.invoice}</th>
                    <td>{moment(invoice?.date).format("DD/MM/YYYY")}</td>
                    <td>{invoice?.paymentMethod}</td>
                    <td>
                      {invoice?.status === "paid" ? (
                        <span className="text-primary">Paid</span>
                      ) : (
                        <span className="text-accent"> Pending</span>
                      )}
                    </td>
                    <td>
                      <span className="font-semibold">
                        ${parseFloat(invoice?.amount).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* <!-- row 1 --> */}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <EmptyOrders></EmptyOrders>
      )}
    </div>
  );
};

export default Dashboard;

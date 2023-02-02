import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import EmptyOrders from "../../../components/EmptyOrders/EmptyOrders";
import Loader from "../../../components/Loader/Loader";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
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
        <meta name="description" content="User Dashboard" />
      </Helmet>
      {isLoading ? (
        <Loader></Loader>
      ) : invoices?.length ? (
        <>
          <h4 className="text-base text-gray-700 font-semibold leading-none">
            My Orders
          </h4>

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
                  <th>Action</th>
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
                    <td>
                      <Link
                        to={`/invoice/${invoice?.invoiceId}`}
                        className="text-primary bg-primary/20 rounded-full px-2 py-[2px] hover:text-white hover:bg-primary"
                      >
                        Detials
                      </Link>
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

export default MyOrders;

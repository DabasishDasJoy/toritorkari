import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useContext, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { BsPrinter } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import Logo from "../../../components/Logo/Logo";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import "./Invoice.css";

const Invoice = () => {
  const ref = useRef();
  const { uid } = useParams();
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    refetch,
    data: { data: invoice } = [],
  } = useQuery({
    queryKey: ["invoices", uid],
    queryFn: () => {
      return axios.get(`/invoices/${uid}?email=${user?.email}`);
    },
  });

  return (
    <div className="sub-section bg-[#F9FAFB]">
      <Helmet>
        <title>ToriTorkari Bazar - Invoice</title>
        <meta
          name="description"
          content="Order details with confirmation of the user."
        />
      </Helmet>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <SuccessMessage></SuccessMessage>

          <div className="bg-white my-5 text-[17px]" ref={ref}>
            <div className="bg-[#EEF2FF] rounded-t-md lg:p-5 p-2 text-black">
              <div className="flex lg:flex-nowrap flex-wrap justify-between">
                <h1 className="text-3xl uppercase font-bold">Invoice</h1>
                <div className="lg:text-right text-left flex flex-col items-end">
                  <div className="border flex justify-center w-max bg-primary text-white rounded-full px-2 py-1">
                    <Logo></Logo>
                  </div>
                  <p>
                    Cecilia Chapman, 561-4535 Nulla LA, <br /> United States
                    96522
                  </p>
                </div>
              </div>
              <hr className="bg-white border-white my-2" />
              <div className="flex lg:flex-nowrap flex-wrap justify-between text-[17px]">
                <div>
                  <p className="font-bold">Date</p>
                  <p>{moment(invoice?.date).format("Do MMMM, YYYY")}</p>
                </div>

                <div className="text-center">
                  <p className="font-bold">Invoice No</p>
                  <p>{invoice?.invoice}</p>
                </div>

                <div className="lg:text-right">
                  <p className=" font-bold">Invoice to</p>
                  <p>
                    {invoice?.firstname} {invoice?.lastname}
                  </p>
                  <p>{invoice?.address}</p>
                  <p>
                    {invoice?.city}, {invoice?.country}, {invoice?.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:p-5 p-2">
              <div className="overflow-x-auto text-black text-center  ">
                <table className="w-full">
                  {/* <!-- head --> */}
                  <thead className="bg-secondary">
                    <tr>
                      <th>No</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Item Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice?.cart?.map((item, idx) => (
                      <tr key={item?._id}>
                        <th>{idx + 1}</th>
                        <td>{item?.name}</td>
                        <td>{item?.quantity}</td>
                        <td>${parseFloat(item?.price).toFixed(2)}</td>
                        <td>${(item?.price * item?.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                    {/* <!-- row 1 --> */}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-primary/10 rounded-b-md text-black/80 sub-section lg:flex lg:flex-nowrap flex-wrap justify-between text-center">
              <div>
                <p className="text-base font-bold">Payment Method</p>
                <p>{invoice?.paymentMethod}</p>
              </div>

              <div>
                <p className="text-base font-bold">Shipping</p>
                <p>${parseFloat(invoice?.shippingCost).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">Discount</p>
                <p>${parseFloat(invoice?.discount).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">Total</p>
                <p className="text-lg font-bold text-warning">
                  ${parseFloat(invoice?.amount).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="sub-section flex justify-end">
            <ReactToPrint
              trigger={() => (
                <button className="tori-btn-secondary w-[20%] flex justify-center items-center gap-1 ">
                  <BsPrinter className="  text-white" /> Print
                </button>
              )}
              content={() => ref.current}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Invoice;

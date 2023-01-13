import React, { useRef } from "react";
import { BsPrinter } from "react-icons/bs";
import ReactToPrint from "react-to-print";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

import "./Invoice.css";
const Invoice = () => {
  const ref = useRef();

  return (
    <div className="sub-section bg-[#F9FAFB]">
      <SuccessMessage></SuccessMessage>

      <div className="bg-white my-5 text-sm" ref={ref}>
        <div className="bg-[#EEF2FF] rounded-t-md lg:p-5 p-2 text-black">
          <div className="flex lg:flex-nowrap flex-wrap justify-between">
            <h1 className="text-3xl uppercase font-bold">Invoice</h1>
            <div className="lg:text-right text-left">
              <p>Logo</p>
              <p>
                Cecilia Chapman, 561-4535 Nulla LA, <br /> United States 96522
              </p>
            </div>
          </div>
          <hr className="bg-white border-white my-2" />
          <div className="flex lg:flex-nowrap flex-wrap justify-between text-sm">
            <div>
              <p className="text-base font-bold">Date</p>
              <p>17 Jan, 2023</p>
            </div>

            <div>
              <p className="text-base font-bold">Invoice No</p>
              <p>#10202</p>
            </div>

            <div className="lg:text-right">
              <p className="text-base font-bold">Invoice to</p>
              <p>Dabasish Joy</p>
              <p>Sholokbohor, Chattogram</p>
              <p>Chattogram, Bangladesh, 4203</p>
            </div>
          </div>
        </div>

        <div className="lg:p-5 p-2">
          <div className="overflow-x-auto text-black text-center">
            <table className="w-full">
              {/* <!-- head --> */}
              <thead className="bg-secondary">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-primary/10 rounded-b-md text-black/80 sub-section lg:flex lg:flex-nowrap flex-wrap justify-between text-sm">
          <div>
            <p className="text-base font-bold">Payment Method</p>
            <p>Card</p>
          </div>

          <div>
            <p className="text-base font-bold">Shipping</p>
            <p>$102</p>
          </div>
          <div>
            <p className="text-base font-bold">Discount</p>
            <p>$102</p>
          </div>
          <div>
            <p className="text-base font-bold">Total</p>
            <p className="text-lg font-bold text-warning">$102</p>
          </div>
        </div>
      </div>

      <ReactToPrint
        trigger={() => (
          <div className="sub-section flex justify-center">
            <button className="tori-btn-secondary w-[20%] flex justify-center items-center gap-1 ">
              <BsPrinter className="  text-white" /> Print
            </button>
          </div>
        )}
        content={() => ref.current}
      />
    </div>
  );
};

export default Invoice;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import AppDownload from "../../Home/AppDownload/AppDownload";
import Supports from "../../Home/Supports/Supports";

const Footer = () => {
  return (
    <div>
      <AppDownload></AppDownload>
      <Supports></Supports>
      <div className="border-t-[1px] w-[50%] mx-auto"></div>
      <footer className="footer p-10 text-gray-700">
        <div>
          <div className="border flex justify-center w-max bg-primary text-white rounded-full px-2 py-1">
            <Logo></Logo>
          </div>

          <div>
            <p>
              987 Andre Plain Suite High Street 838, <br /> Lake Hestertown, USA{" "}
              <br />
              Tell: 02.356.1666
              <br />
              Email: ccruidk@test.com
            </p>
          </div>
        </div>
        <div>
          <span className="footer-title text-gray-700">Services</span>
          <Link className="tori-link link-hover">Branding</Link>
          <Link className="tori-link link-hover">Design</Link>
          <Link className="tori-link link-hover">Marketing</Link>
          <Link className="tori-link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title text-gray-700">Company</span>
          <Link className="tori-link link-hover">About us</Link>
          <Link className="tori-link link-hover">Contact</Link>
          <Link className="tori-link link-hover">Jobs</Link>
          <Link className="tori-link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title text-gray-700">Legal</span>
          <Link className="tori-link link-hover">Terms of use</Link>
          <Link className="tori-link link-hover">Privacy policy</Link>
          <Link className="tori-link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="border-t-[1px] w-[50%] mx-auto"></div>
      <div className="lg:px-10 lg:pb-5 px-3 pb-5">
        <div className="bg-[#F9FAFB] grid lg:grid-cols-3 py-5 lg:px-10 px-5 gap-5 w-full rounded-md text-black">
          <div className="flex flex-col lg:items-start items-center justify-center gap-2">
            <p>Follow Us</p>
            <div className="flex gap-3">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <p>Call Us Today!</p>
            <span className="text-primary font-extrabold text-xl">
              +880 1571763498
            </span>
          </div>
          <div className="flex items-center lg:justify-end justify-center">
            <img
              src="https://kachabazar-store.vercel.app/_next/image?url=%2Fpayment-method%2Fpayment-logo.png&w=384&q=75"
              alt=""
              className="w-52"
            />
          </div>
        </div>

        <div className="text-center pt-5 text-black/90 text-sm">
          <p>
            Copyright 2022 @{" "}
            <span className="text-primary">Dabasish Das Joy</span>, All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

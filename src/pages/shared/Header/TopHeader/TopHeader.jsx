import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <div className="justify-between font-medium text-xs leading-5 text-neutral bg-secondary component lg:flex hidden">
      {/* left  */}
      <div>
        <p>
          <FiPhoneCall className="inline mr-1" /> We are available 24/7, Need
          Help? Call Us:{" "}
          <span className="text-primary font-bold">+880 1876 097120</span>
        </p>
      </div>

      {/* right */}
      <div className="flex justify-around gap-3">
        <Link className="link" to={"/contact"}>
          Contact Us
        </Link>
        |
        <Link className="link" to={"/faq"}>
          FAQ
        </Link>
        |
        <Link className="link" to={"/blog"}>
          Blog
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;

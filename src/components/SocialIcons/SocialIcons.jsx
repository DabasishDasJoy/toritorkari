import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";

const SocialIcons = () => {
  return (
    <div className="flex gap-3 mt-3">
      <span className="social-icon twitter">
        <FaTwitter />
      </span>
      <span className="social-icon facebook">
        <FaFacebookF />
      </span>
      <span className="social-icon google">
        <TfiGoogle />
      </span>
      <span className="social-icon whatsApp">
        <BsWhatsapp />
      </span>
    </div>
  );
};

export default SocialIcons;

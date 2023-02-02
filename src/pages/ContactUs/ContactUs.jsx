import React from "react";
import { Helmet } from "react-helmet-async";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>ToriTorkari Bazar - Contact</title>
        <meta
          name="description"
          content="Contact information of the authority."
        />
      </Helmet>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default ContactUs;

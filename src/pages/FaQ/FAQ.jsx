import React from "react";
import { Helmet } from "react-helmet-async";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>ToriTorkari Bazar - FAQ</title>
        <meta name="description" content="Common QNA." />
      </Helmet>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default FAQ;

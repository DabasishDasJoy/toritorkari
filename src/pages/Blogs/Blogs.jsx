import React from "react";
import { Helmet } from "react-helmet-async";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>ToriTorkari Bazar - Blogs</title>
        <meta name="description" content="Latest news and blog by the shop." />
      </Helmet>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default Blogs;

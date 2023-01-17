import React from "react";
import { ThreeDots } from "react-loader-spinner";

const ButtonLoader = () => {
  return (
    <ThreeDots
      height="25"
      width="50"
      radius="5"
      color="#ffffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default ButtonLoader;

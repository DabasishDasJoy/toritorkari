import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import StatusTag from "../StatusTag/StatusTag";

const Coupon = ({
  offer: { name, coupon, discount, image, expiresIn, leastAmount },
}) => {
  // Count down timer
  const [timeDays, setTimeDays] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMins, setTimeMins] = useState(0);
  const [timeSecs, setTimeSecs] = useState(0);
  const [expired, setExpired] = useState(false);

  let interval;
  const startTimer = () => {
    const countDownDate = new Date(expiresIn).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const secs = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // stop
        clearInterval(interval.current);
        setTimeDays(0);
        setTimeHours(0);
        setTimeMins(0);
        setTimeSecs(0);
        setExpired(true);
      } else {
        // update
        // console.log("ticking");
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMins(mins);
        setTimeSecs(secs);
      }
    });
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`flex lg:flex-nowrap flex-wrap px-2 py-3 rounded-md bg-white shadow lg:gap-0 gap-2 ${
        expired && "border-warning border"
      }`}
    >
      {/* First Part */}
      <div className="lg:w-[65%] w-full lg:border-r-2 border-dashed flex">
        {/* image */}
        <div className="flex items-center">
          <img src={image} alt="" className="w-16" />
        </div>
        {/*  */}
        <div className="text-black w-[65%] flex flex-col mx-auto justify-around lg:gap-0 gap-2">
          <div className="flex items-center justify-between ">
            <p>
              <span className="text-accent font-bold">{discount}%</span> Off
            </p>
            <StatusTag color={expired ? false : true}>
              {expired ? "Expired" : "Active"}
            </StatusTag>
          </div>
          <p className="font-semibold lg:text-base text-base">{name}</p>

          {/* countdown */}
          <div className="w-full mt-1">
            <p className="text-black font-semibold flex gap-1">
              <span className="bg-primary text-white px-2  rounded-md">
                {timeDays}
              </span>{" "}
              :
              <span className="bg-primary text-white px-2  rounded-md">
                {timeHours}
              </span>{" "}
              :
              <span className="bg-primary text-white px-2  rounded-md">
                {timeMins}
              </span>{" "}
              :
              <span className="bg-primary text-white px-2  rounded-md">
                {timeSecs}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Side Part */}
      <div className="lg:w-[35%] w-full lg:px-2 gap-2 flex flex-col lg:items-center items-start">
        <span
          className="coupon-tag cursor-pointer tooltip tooltip-secondary"
          data-tip="Click to Copy"
          onClick={(e) => {
            navigator.clipboard.writeText(e.target.innerText);
            toast.success("Copied !", {
              position: "top-right",
            });
          }}
        >
          {coupon}
        </span>
        <p className="text-xs font-medium text-center text-black/80">
          Enjoy {discount}% off on{" "}
          <span className="font-semibold"> ${leastAmount} </span>
          shopping or more.
        </p>
      </div>
    </div>
  );
};

export default Coupon;

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import StatusTag from "../StatusTag/StatusTag";

const Coupon = ({ offer: { name, coupon, discount, details, expiresIn } }) => {
  // Count down timer
  const [timeDays, setTimeDays] = useState();
  const [timeHours, setTimeHours] = useState();
  const [timeMins, setTimeMins] = useState();
  const [timeSecs, setTimeSecs] = useState();

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
      } else {
        // update
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMins(mins);
        setTimeSecs(secs);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="flex lg:flex-nowrap flex-wrap px-2 py-3 rounded-md bg-white shadow lg:gap-0 gap-2">
      {/* First Part */}
      <div className="lg:w-[65%] w-full lg:border-r-2 border-dashed flex">
        {/* image */}
        <div className="flex items-center">
          <img
            src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
            alt=""
            className="w-16"
          />
        </div>
        {/*  */}
        <div className="text-black w-[65%] flex flex-col mx-auto justify-around lg:gap-0 gap-2">
          <div className="flex items-center justify-between ">
            <p>
              <span className="text-accent font-bold">{discount}%</span> Off
            </p>
            <StatusTag color={true}>Active</StatusTag>
          </div>
          <p className="font-semibold lg:text-base text-base">{name}</p>

          {/* countdown */}
          <div className="w-full">
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
        <p className="text-xs font-medium text-black/80">{details}</p>
      </div>
    </div>
  );
};

export default Coupon;

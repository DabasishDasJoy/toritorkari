import React, { useContext } from "react";
import { AiOutlineMenuFold, AiOutlineSetting } from "react-icons/ai";
import {
  RiDashboardLine,
  RiLockPasswordLine,
  RiLogoutCircleLine,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const DashboardSidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        localStorage.removeItem("token");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="lg:w-[30%] w-full relative text-gray-800 ">
      <div className="flex flex-col divide-y-2 sticky top-0 bg-white px-5 py-3 rounded-sm">
        <Link to={"/user/dashboard"} className="dashboard-link">
          <span className="border rounded-full p-1">
            <RiDashboardLine />
          </span>
          Dashboard
        </Link>
        <Link to={"/user/dashboard/myorders"} className="dashboard-link">
          <span className="border rounded-full p-1">
            <AiOutlineMenuFold />
          </span>
          My Orders
        </Link>
        <Link to={"/user/dashboard/updateProfile"} className="dashboard-link">
          <span className="border rounded-full p-1">
            <AiOutlineSetting />
          </span>
          Update Profile
        </Link>
        <Link to={"/user/dashboard/changepassword"} className="dashboard-link">
          <span className="border rounded-full p-1">
            <RiLockPasswordLine />{" "}
          </span>{" "}
          Change Password
        </Link>
        <button onClick={handleLogout} className="dashboard-link">
          <span className="border rounded-full p-1">
            <RiLogoutCircleLine />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

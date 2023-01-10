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
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-white col-span-3 text-black p-10">
      <div className="flex flex-col gap-2">
        <Link to={"/user/dashboard"} className="dashboard-link">
          <RiDashboardLine />
          Dashboard
        </Link>
        <Link className="dashboard-link">
          <AiOutlineMenuFold />
          My Orders
        </Link>
        <Link className="dashboard-link">
          <AiOutlineSetting /> Update Profile
        </Link>
        <Link className="dashboard-link">
          <RiLockPasswordLine /> Change Password
        </Link>
        <button onClick={handleLogout} className="dashboard-link">
          <RiLogoutCircleLine />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

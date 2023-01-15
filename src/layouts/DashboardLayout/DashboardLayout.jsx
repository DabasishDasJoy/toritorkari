import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../pages/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 sub-section gap-5 tori-bg-gray">
      <DashboardSidebar></DashboardSidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
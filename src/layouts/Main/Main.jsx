import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Header from "../../pages/shared/Header/Header/Header";

const Main = () => {
  return (
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>

        <div className="menu p-4 w-80 bg-white">
          {/* <!-- Sidebar content here --> */}
          <div className="bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;

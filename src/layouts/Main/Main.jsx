import React from "react";
import { Outlet } from "react-router-dom";
import MyCart from "../../pages/MyCart/MyCart/MyCart";
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

        <div className="menu w-80 bg-white relative min-h-screen">
          {/* <!-- Sidebar content here --> */}

          <MyCart></MyCart>
        </div>
      </div>
    </div>
  );
};

export default Main;

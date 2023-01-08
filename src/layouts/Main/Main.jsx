import React from "react";
import MyCart from "../../pages/MyCart/MyCart/MyCart";
import MainHeader from "../../pages/shared/Header/MainHeader/MainHeader";

const Main = () => {
  return (
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <MainHeader></MainHeader>
      </div>
      <div className="drawer-side">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>

        <div className="menu bg-white relative min-h-screen max-h-screen">
          {/* <!-- Sidebar content here --> */}
          <MyCart></MyCart>
        </div>
      </div>
    </div>
  );
};

export default Main;

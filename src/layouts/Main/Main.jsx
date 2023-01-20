import React, { useState } from "react";
import LoginModal from "../../components/LoginModal/LoginModal";
import ProductModal from "../../components/ProductModal/ProductModal";
import MyCart from "../../pages/MyCart/MyCart/MyCart";
import MainHeader from "../../pages/shared/Header/MainHeader/MainHeader";

const Main = () => {
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  return (
    <div className="drawer drawer-end ">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <MainHeader setLoginOrRegister={setLoginOrRegister}></MainHeader>
        <LoginModal
          loginOrRegister={loginOrRegister}
          setLoginOrRegister={setLoginOrRegister}
        ></LoginModal>
        <ProductModal></ProductModal>
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

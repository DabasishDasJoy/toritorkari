import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Indicator from "../../components/Indicator/Indicator";
import LoginModal from "../../components/LoginModal/LoginModal";
import ProductModal from "../../components/ProductModal/ProductModal";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import MyCart from "../../pages/MyCart/MyCart/MyCart";
import MainHeader from "../../pages/shared/Header/MainHeader/MainHeader";

const Main = () => {
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  const { numberOfCartItems, refetch } = useContext(CartContext);

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

        {/* Cart On Bottom */}

        <label
          className="lg:block hidden bg-primary absolute bottom-5 p-4 rounded-sm shadow-lg cursor-pointer right-5"
          htmlFor="cart-drawer"
          onMouseEnter={() => refetch()}
        >
          <div className="indicator flex justify-center items-center">
            <FaCartArrowDown className="w-6 h-6 text-white" />
            <Indicator>{numberOfCartItems}</Indicator>
          </div>
        </label>

        {/* Cart bottom End */}
      </div>
      <div className="drawer-side">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>

        <div className="menu  bg-white text-gray-700 relative min-h-screen max-h-screen">
          {/* <!-- Sidebar content here --> */}
          <MyCart></MyCart>
        </div>
      </div>
    </div>
  );
};

export default Main;

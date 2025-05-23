import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import { useSelector } from "react-redux";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";

const Menu = () => {
  // useEffect(() => {
  //   document.title = "POS | Menu";
  // }, []);

  const customerData = useSelector((state) => state.customer);
  // console.log(customerData);

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-y-scroll scrollbar-hide flex gap-3">
      {/* Left Div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#F5F5F5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#F5F5F5]">
                  {customerData.customerName || "Customer name"}
                </h1>
                <p className="text-xs text-[#ababab]">Table: 
                  {customerData.table?.tableNo || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* Right Div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2 overflow-y-scroll scrollbar-hide">
        {/* Customer Info */}
        <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Cart Items */}
        <CartInfo />
        {/* Bills */}
        <Bill />
      </div>
      <BottomNav />
    </section>
  );
};

export default Menu;

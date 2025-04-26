import React from "react";
import logo from "../../assets/images/logo.png";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#F5F5F5]">Restro</h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#F5F5F5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#F5F5F5]"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#F5F5F5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#F5F5F5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#F5F5F5]">Amrit Raj</h1>
            <p className="text-xs text-[#ababab]">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

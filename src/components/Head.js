import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg static">
      <div className="flex gap-5">
        <img
          className="w-8 h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
          onClick={() => toggleMenuHandler()} // Corrected line
        />
          <img
            className="w-18 h-8"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="you_tube_logo"
          />

      </div>
      <div className="flex mb-2">
        <input
          type="text"
          placeholder="Search"
          name=""
          id=""
          className="border border-gray-400 w-[600px] h-10 rounded-l-full p-4 "
        />
        <button className="border border-gray-400 rounded-r-full w-16 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="">
        <img
          className="w-8 h-8 float-right"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user_logo"
        />
      </div>
    </div>
  );
};

export default Head;

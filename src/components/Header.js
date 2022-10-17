import React from "react";
import facebook from "../assets/facebook1.png";
import user from "../assets/guy7.jpg";

import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
function Header() {
  return (
    <div className="flex justify-between p-4 border-b">
      {/* leftside */}
      <div className="flex items-center">
        <div className="w-10 h-10">
          <img src={facebook} />
        </div>
        <div>
          <input
            type="text"
            className="ml-2 bg-gray-200 rounded-full p-2 outline-none hidden sm:block"
            placeholder={"Search facebook"}
          />
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center space-x-4">
        <MdHome className="h-8 w-8" />
        <FiFlag className="h-8 w-8" />
        <FiPlayCircle className="h-8 w-8" />
        <BsCart3 className="h-8 w-8" />
        <GrGroup className="h-8 w-8" />
      </div>
      {/* rightside */}
      <div className="flex space-x-4 items-center">
        <div className="hidden md:flex space-x-4">
          <GrAppsRounded className="h-8 w-8 " />
          <FaBell className="h-8 w-8" />
          <AiOutlineMessage className="h-8 w-8" />
        </div>
        <div className="w-10 h-10">
          <img src={user} className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
export default Header;

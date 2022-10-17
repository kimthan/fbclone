import React from "react";
import guy from "../assets/guy7.jpg";
import { MdHome, MdGroup } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";

function LeftSidebar() {
  return (
    <div className="w-[10rem] hidden sm:block h-[10rem]">
      <div className="pt-4 pl-7 flex flex-col">
        <div className=" flex items-center font-bold ">
          <MdHome className="w-9 h-9" />

          <p className="ml-2">home</p>
        </div>
        <div className="flex items-center mt-4 ">
          <div className="w-9 h-9">
            <img src={guy} className="rounded-full" />
          </div>
          <p className="ml-2 font-bold ">Log In</p>
        </div>
        <div className="border-b  my-4"></div>
        <div className=" space-y-6">
          <div className=" flex items-center font-bold">
            <AiOutlineDesktop className="w-9 h-9" />
            <p className="ml-2">watch</p>
          </div>
          <div className=" flex items-center font-bold">
            <BsPeopleFill className="w-9 h-9" />
            <p className="ml-2">Friends</p>
          </div>
          <div className=" flex items-center font-bold">
            <MdGroup className="w-9 h-9" />
            <p className="ml-2">Groups</p>
          </div>
          <div className=" flex items-center font-bold">
            <BsCart3 className="w-9 h-9" />
            <p className="ml-2">Marketplace</p>
          </div>
          <div className=" flex items-center font-bold">
            <BsCalendar2Fill className="w-9 h-9" />
            <p className="ml-2">Events</p>
          </div>
          <div className=" flex items-center font-bold">
            <AiFillClockCircle className="w-9 h-9" />
            <p className="ml-2">Memories</p>
          </div>
          <div className=" flex items-center ">
            <RiArrowDownSLine className="w-9 h-9" />
            <p className="ml-2">See More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;

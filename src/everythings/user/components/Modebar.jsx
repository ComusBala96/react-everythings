import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
export default function Modebar({ mode }) {
  return (
    <>
      <div
        className={`${
          mode ? "hidden duration-300" : "fixed duration-300"
        } shadow  bg-gray-100 h-screen top-16 md:right-0 w-40 z-50`}
      >
        <div className="shadow-sm m-2  border rounded h-12 p-2 flex justify-center items-center space-x-2 hover:bg-blue-400 ">
          <NavLink
            to="/home"
            className="no-underline text-black border rounded p-1 shadow-sm"
          >
            <MdOutlineSettings className=" text-lg" />
          </NavLink>
          <NavLink to="/home" className="no-underline text-black ">
            <span className="hover:text-gray-100 text-sm">
              Customize Settings
            </span>
          </NavLink>
        </div>
        <hr className="my-0 w-44  mx-auto" />
        <div className="cursor-pointer shadow-sm my-2 mx-[3px] border rounded h-9 flex justify-center items-center space-x-1 ">
          <input type="checkbox" name="checkbox" id="checkbox" defaultChecked />
          <span className=" text-sm">Light Mode</span>
        </div>
        <div className="cursor-pointer shadow-sm my-2 mx-[3px] border rounded h-9 flex justify-center items-center space-x-1 ">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <span className=" text-sm">Dark Mode</span>
        </div>
      </div>
    </>
  );
}

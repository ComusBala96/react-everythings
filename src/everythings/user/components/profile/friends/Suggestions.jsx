import React from "react";
import logo from "../../../../../images/logo/default.png";
import { NavLink, Link } from "react-router-dom";
import {
  BiSearch,
  BiDotsHorizontalRounded,
  BiDotsVertical,
} from "react-icons/bi";
import { FiClock } from "react-icons/fi";
export default function Suggestions() {
  return (
    <>
      <div className="col-span-7 ">
        <div className="flex items-center justify-around py-2 border bg-gray-200 sticky top-28 shadow-sm">
          <div className="font-semibold  px-4 py-1 rounded-sm shadow bg-white ">
            <span className="mr-[2px]">Suggestions</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-2 py-1 rounded-sm">
            <input
              type="text"
              name=""
              className="bg-slate-100 outline-none rounded-sm pl-1"
              id=""
              placeholder="Search"
            />
            <BiSearch className="cursor-pointer" />
          </div>
          <NavLink>
            <BiDotsVertical className="text-xl" />
          </NavLink>
        </div>
        <div className="bg-white">
          <div className="px-10 py-2">
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-4 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-span-7 flex items-center space-x-2">
                <span>Message</span>
                <span>Channel</span>
                <span>Linked</span>
                <span>Tweet</span>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
            <div className=" grid  grid-cols-12 mb-2 rounded-sm p-2 shadow-sm bg-gray-100 hover:bg-gray-200 ">
              <div className="col-span-11 flex ">
                <NavLink to="/user/profiles" className={`flex space-x-1`}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                  <div className="text-sm">
                    <span className="">Brad Diesel</span>
                    <div className="flex items-center space-x-1">
                      <FiClock className="" />
                      <span className="">Since 1 days</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <NavLink className=" px-4 py-2" title="Action">
                <BiDotsHorizontalRounded className="text-xl" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import logo from "../../../images/logo/default.png";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaEnvelope } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsGrid, BsPersonCircle, BsCircle } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({
  sidebarMenu,
  setSidebarMenu,
  mode,
  setMode,
  log,
  setLog,
  fullScreen,
  notification,
  setNotification,
  closeNotification,
}) {
  return (
    <>
      <div
        className={`shadow  ${
          sidebarMenu
            ? "md:w-[70%] md:left-[30%] lg:w-[75%] lg:left-[25%] xl:w-[82%]  xl:left-[18%] duration-300"
            : "md:w-[90%] md:left-[10%] lg:w-[92%] lg:left-[8%] xl:w-[94%]  xl:left-[6%] duration-300 "
        } fixed top-0 z-20 w-screen `}
      >
        <div className="grid grid-cols-8 justify-around items-center bg-white h-16">
          <div
            className={`${sidebarMenu ? "md:hidden" : "hidden duration-300"} `}
          >
            <Link to="/">
              <figure className="">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full shadow-lg"
                  title="Logo"
                />
              </figure>
            </Link>
          </div>
          <div
            className={`${
              sidebarMenu ? "col-span-7 md:col-span-12 " : "col-span-8"
            } grid grid-flow-col  justify-around items-center`}
          >
            <Link
              to="/user/dashboard"
              className="no-underline md:order-3"
              onClick={closeNotification}
            >
              <MdDashboard
                className="text-lg cursor-pointer"
                title="Dashboard"
              />
            </Link>
            <NavLink to="/user/contact" className="no-underline md:order-2">
              <TiContacts className="text-xl cursor-pointer" title="Contact" />
            </NavLink>
            <GiHamburgerMenu
              className="text-lg cursor-pointer md:ml-2 md:order-1"
              title="Menu"
              onClick={() => setSidebarMenu(!sidebarMenu)}
            />
            <Link
              to="/user/message"
              className="md:order-4"
              onClick={closeNotification}
            >
              <div className="flex relative items-center cursor-pointer">
                <FaEnvelope className="  " title="Message" />
                <div className="absolute -top-3 left-2 bg-red-500 px-[6px] py-[1px] shadow rounded-[4px] text-white text-[12px]">
                  3
                </div>
              </div>
            </Link>
            <div
              className="flex relative items-center cursor-pointer md:order-5"
              onClick={() => setNotification(!notification)}
            >
              <IoMdNotifications className="text-xl" title="Notification" />
              <div className="absolute -top-3 left-2 bg-yellow-400 px-[6px] py-[1px] shadow rounded-[4px] text-white text-[12px]">
                9
              </div>
            </div>
            <div
              className=" relative cursor-pointer flex items-baseline md:order-6"
              onClick={() => setLog(!log)}
            >
              <BsPersonCircle className="md:hidden shadow-lg" />
              <span
                className=" md:mr-1 font-light hidden md:inline-block"
                title="Profile"
              >
                Comus Bala
              </span>
              <BsCircle className="absolute -top-1 left-3  md:static text-xs text-green-500 bg-green-500 rounded-full" />
            </div>
            <BiSearch
              className="hidden md:inline-block md:order-7 text-lg cursor-pointer"
              title="Search"
            />
            <AiOutlineFullscreen
              className="text-lg cursor-pointer md:order-9"
              title="Fullscreen"
              onClick={fullScreen}
            />
            <BsGrid
              className="text-lg cursor-pointer md:order-9"
              title="Mode"
              onClick={() => setMode(!mode)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

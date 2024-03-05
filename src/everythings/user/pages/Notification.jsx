import React from "react";
import logo from "../../../images/logo/default.png";
import { FiClock } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import WelcomeUser from "./WelcomeUser";
export default function Notification({ setNotification }) {
  return (
    <>
      <div className="flex justify-between h-contactHeightUser">
        <div className="hidden md:inline-block md:w-[55%] lg:w-[65%] xl:w-[75%] md:h-notificationPageBoxHeight border overflow-y-auto  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200">
          <WelcomeUser />
        </div>
        <div
          className={`h-notificationPageBoxHeight w-[100%] md:w-[45%] lg:w-[35%] xl:w-[25%]  bg-white shadow-lg border rounded-md  border-gray-300 overflow-y-auto  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200 `}
        >
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 border rounded-full"
                title="Logo"
              />
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
          <div className=" flex justify-evenly  items-center p-2 border-b hover:bg-gray-50 space-x-2">
            <Link to="/profile">
              <figure className="mx-auto">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
            </Link>
            <NavLink to="/user/notification" className={`col-span-4  text-sm`}>
              <h1 className="">Brad Diesel</h1>
              <p className="">Call me whenever you . . </p>
              <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                <FiClock className="" />
                <p className="col-span-11">4 hour ago</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

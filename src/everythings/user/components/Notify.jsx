import React from "react";
import logo from "../../../images/logo/default.png";
import { FiClock } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
export default function Notify({
  notification,
  setNotification,
  closeNotification,
}) {
  return (
    <>
      <div
        className={`${
          notification ? "fixed " : " hidden"
        } z-40 top-[72px] right-[8px] w-[100%] md:w-[44%] lg:w-[34.5%] xl:w-[20.3%] h-notificationHeight  bg-blue-300 border rounded-md  border-gray-300 overflow-y-auto  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200 `}
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
          <NavLink
            to="/user/notification"
            className={`col-span-4  text-sm`}
            onClick={closeNotification}
          >
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
    </>
  );
}

import React from "react";
import { GrSearch } from "react-icons/gr";
import { FiUpload } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../../images/logo/default.png";
export default function MovieBar() {
  return (
    <>
      <div className=" sticky top-16 z-20 bg-white">
        <div className="px-2 md:py-2 bg-sticky_navbar shadow-lg grid-flow-row md:grid md:grid-flow-col md:grid-cols-12 gap-2 justify-center ">
          <div className="col-span-2 md:border-r-2 hidden md:grid">
            <figure className="flex items-center space-x-1">
              <Link to="/profile">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </Link>
              <div className="flex flex-col text-white">
                <Link to="/profile">
                  <span>Brad Diesel</span>
                </Link>
                <span className="text-xs">Subscriber : 1.2k</span>
              </div>
            </figure>
          </div>
          <div className=" text-white border-b-2 py-3 text-center md:py-0 md:border-b-0 col-span-7 flex justify-around md:grid md:grid-cols-7 items-center md:border-r-2">
            <NavLink to="/user/movies" className=" cursor-pointer">
              Movie
            </NavLink>
            
            <NavLink to="/user/movies/playlist" className=" cursor-pointer">
              PlayList
            </NavLink>
            <NavLink to="/user/movies/channels" className=" cursor-pointer">
              Channels
            </NavLink>
            <NavLink to="/user/movies/about" className=" cursor-pointer">
              About
            </NavLink>
            <NavLink to="/user/movies/settings" className=" cursor-pointer">
              Settings
            </NavLink>
            <NavLink to="/logout" className=" cursor-pointer">
              Logout
            </NavLink>
            <Link
              to="/user/movies/upload"
              className=" cursor-pointer "
              title="Upload"
            >
              <FiUpload className="mx-auto shadow-md rounded-md p-1 text-black text-2xl animate-pulse bg-white" />
            </Link>
          </div>
          <div className="col-span-3 py-2 md:py-0 flex justify-center md:grid md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 items-center space-x-1">
            <input
              type="text"
              name="searchMessage"
              className="md:col-span-5 lg:col-span-7 xl:col-span-11 outline-none w-[80%] md:w-[100%] h-7  bg-slate-100 border rounded-sm pl-1"
              placeholder="Search"
              id="searchMessage"
            />
            <GrSearch className="col-span-1  cursor-pointer" title="Search" />
          </div>
        </div>
      </div>
    </>
  );
}

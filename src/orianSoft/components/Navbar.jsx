import React, { useState } from "react";
import logo from "../../images/logo/default.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  const [navbarToggle, setNavbarToggle] = useState(true);
  return (
    <>
      <div className="w-screen md:h-16 md:grid md:grid-flow-col md:grid-cols-12  items-center md:bg-gray-100 md:shadow md:shadow-blue-500/50 fixed top-0 z-50">
        <div className="md:h-16 md:col-span-2 grid grid-cols-12 md:grid-cols-6 justify-between items-center py-2 p-1 bg-cyan-300 shadow-lg">
          <div className="col-span-5 md:col-span-6 flex items-center ml-1 space-x-1 md:justify-around  shadow py-1 mx-auto p-1">
            <Link className="no-underline" to="/">
              <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
            </Link>
            <Link
              className=" no-underline text-slate-50 hover:text-slate-500 md:hover:text-slate  md:text-slate-900 text-xl md:text-base lg:text-2xl xl:text-3xl"
              to="/"
            >
              OrianSoft
            </Link>
          </div>
          <div className="col-span-6 flex justify-around items-center  my-auto mx-2 bg-slate-100 rounded-md md:hidden">
            <input
              type="text"
              className="w-[35vw] outline-none h-7 ml-3 placeholder:pl-2 placeholder:text-sm"
              name="search1"
              id="search1"
              placeholder="Search"
            />

            <div className="cursor-pointer text-base p-1">
              <BiSearch />
            </div>
          </div>
          <div
            className="col-span-1 md:hidden cursor-pointer"
            onClick={() => setNavbarToggle(!navbarToggle)}
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div
          className={`${
            navbarToggle
              ? " md:grid bg-OrianSoft md:bg-gray-100 hidden"
              : " md:grid bg-OrianSoft md:bg-gray-100 duration-500"
          } md:col-span-5 justify-around`}
        >
          <div className="grid grid-flow-col p-2 md:p-0 space-x-2 xl:space-x-6">
            <NavLink
              className=" no-underline text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className=" no-underline  text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/services"
            >
              Services
            </NavLink>

            <NavLink
              className=" no-underline  text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/team"
            >
              Team
            </NavLink>

            <NavLink
              className=" no-underline  text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/portfolio"
            >
              Portfolio
            </NavLink>

            <NavLink
              className=" no-underline text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/pricing"
            >
              Pricing
            </NavLink>

            <NavLink
              className="no-underline  text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className=" no-underline text-slate-50  md:text-slate-900 text-xs lg:text-base xl:text-lg"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="md:col-span-2 hidden md:flex items-center justify-around xl:space-x-2 ">
          <div className="">
            <input
              type="text"
              className="h-7 md:h-5 lg:h-7  md:w-[13vw] lg:w-[14vw] xl:w-[15vw] md:rounded-sm lg:rounded-md outline-none ring-1 ring-gray-300 placeholder:pl-1 placeholder:text-xs xl:placeholder:text-base"
              name="search"
              id="search2"
              placeholder="Search"
            />
          </div>
          <div className="cursor-pointer text-lg ">
            <BiSearch />
          </div>
        </div>
        <div className="md:col-span-3 md:grid md:grid-flow-col md:grid-cols-6 lg:grid-cols-4 lg:gap-2 xl:gap-4 py-3 md:py-0 flex flex-col md:mx-auto items-center md:space-x-1 space-y-4 md:space-y-0  bg-slate-50 md:bg-slate-100">
          <div className="space-x-2 xl:space-x-6 md:col-span-3 lg:col-span-2">
            <NavLink
              className="no-underline text-slate-900 text-sm lg:text-base xl:text-lg"
              to="/login"
            >
              Login
            </NavLink>

            <NavLink
              className=" no-underline text-slate-900 text-sm lg:text-base xl:text-lg"
              to="/register"
            >
              Register
            </NavLink>
          </div>
          <div className="md:col-span-3 lg:col-span-2">
            <NavLink className="no-underline py-4 md:py-0" to="/home">
              <button className="animate-pulse px-2 py-1 bg-blue-500 hover:bg-blue-600  hover:text-slate-400 text-slate-50 rounded-xl">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

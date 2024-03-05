import React from "react";
import logo from "../../../images/logo/default.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGrid, BsPersonCircle } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { AiOutlineFullscreen, AiTwotoneHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({
  sidebarMenu,
  setSidebarMenu,
  mode,
  setMode,
  log,
  setLog,
  search,
  setSearch,
  screen,
  fullScreen,
}) {
  // const [sidebarMenu, setSidebarMenu] = useState(true);
  // const [mode, setMode] = useState(true);
  // const [log, setLog] = useState(true);
  // const [search, setSearch] = useState(true);
  // const [screen, setScreen] = useState(false);
  // const fullScreenMode = () => {
  //   let myScreen = document.documentElement;
  //   if (screen === false) {
  //     if (
  //       myScreen.requestFullscreen ||
  //       myScreen.msRequestFullscreen ||
  //       myScreen.mozRequestFullscreen ||
  //       myScreen.webkitRequestFullscreen
  //     ) {
  //       return (
  //         myScreen.requestFullscreen() ||
  //         myScreen.msRequestFullscreen() ||
  //         myScreen.mozRequestFullscreen() ||
  //         myScreen.webkitRequestFullscreen()
  //       );
  //     }
  //   } else {
  //     if (screen === true) {
  //       if (
  //         document.exitFullscreen ||
  //         document.msexitFullscreen ||
  //         document.mozexitFullscreen ||
  //         document.webkitexitFullscreen
  //       ) {
  //         return (
  //           document.exitFullscreen() ||
  //           document.msexitFullscreen() ||
  //           document.mozexitFullscreen() ||
  //           document.webkitexitFullscreen()
  //         );
  //       }
  //     }
  //   }
  // };
  // const fullScreen = () => {
  //   fullScreenMode();
  //   setScreen(!screen);
  // };
  return (
    <>
      <div className=" ">
        <div
          className={`shadow  ${
            sidebarMenu
              ? "md:w-[70%] md:left-[30%] lg:w-[75%] lg:left-[25%] xl:w-[82%]  xl:left-[18%] duration-300"
              : "md:w-[90%] md:left-[10%] lg:w-[92%] lg:left-[8%] xl:w-[94%]  xl:left-[6%] duration-300 "
          } fixed top-0 z-20 w-screen `}
        >
          <div className="grid grid-cols-3 items-center bg-white h-16 gap-2">
            <div className=" flex justify-around items-center md:order-2">
              <figure
                className={`${
                  sidebarMenu ? "inline-block" : "hidden"
                } md:hidden`}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>
              <Link to="/user/dashboard" className="no-underline">
                <MdDashboard
                  className="text-lg cursor-pointer"
                  title="Dashboard"
                />
              </Link>
              <NavLink to="/contact" className="no-underline">
                <TiContacts
                  className="text-xl cursor-pointer"
                  title="Contact"
                />
              </NavLink>
            </div>
            <div className="flex relative justify-between items-center md:order-1">
              <NavLink to="/" className="cursor-pointer md:order-2">
                <AiTwotoneHome className=" text-lg " title="Home" />
              </NavLink>
              <GiHamburgerMenu
                className="text-lg cursor-pointer md:order-1 md:ml-2"
                title="Menu"
                onClick={() => setSidebarMenu(!sidebarMenu)}
              />
              <div className="relative md:order-3">
                <BsPersonCircle
                  className="cursor-pointer "
                  title="Login/Register"
                  onClick={() => setLog(!log)}
                />
                <div
                  className={`${
                    log ? "hidden" : "absolute"
                  } bg-white shadow-lg rounded-md border h-20 w-44 p-3 flex flex-col top-10 -left-6 space-y-1`}
                >
                  <Link to="/login" className="no-underline hover:font-medium">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="no-underline hover:font-medium"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex relative justify-evenly items-center md:order-3">
              <BiSearch
                className="text-lg cursor-pointer"
                title="Search"
                onClick={() => setSearch(!search)}
              />
              <AiOutlineFullscreen
                className="text-lg cursor-pointer"
                title="Fullscreen"
                onClick={fullScreen}
              />
              <BsGrid
                className="text-lg cursor-pointer"
                title="Mode"
                onClick={() => setMode(!mode)}
              />
              <div
                className={`${search ? "hidden" : "absolute "} py-4 ${
                  sidebarMenu
                    ? "right-[30vw] md:right-[150px] lg:right-[210px] xl:right-[320px]"
                    : "right-[30vw] md:right-[190px] lg:right-[255px] xl:right-[360px]"
                }`}
              >
                <div className="flex justify-center items-center">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="outline-none border rounded-md h-8 w-[55vw] md:w-80 lg:w-96 xl:w-[26rem] px-1 placeholder:text-sm"
                    placeholder=" Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

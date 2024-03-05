import React, { useState } from "react";
import logo from "../../../images/logo/default.png";
import { AiTwotoneHome } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { FaAngleLeft, FaBitcoin } from "react-icons/fa";
import { TbMoodBoy } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";
import { SiPagekit } from "react-icons/si";
import { FcFilmReel, FcPhotoReel, FcBusiness } from "react-icons/fc";
import {
  MdLocalMovies,
  MdPrivateConnectivity,
  MdOutlineProductionQuantityLimits,
  MdCarRental,
} from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";
import { BsCircle, BsFillPersonFill } from "react-icons/bs";
import { BiSearch, BiRepost, BiDollarCircle } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
export default function Sidebar({ sidebarMenu }) {
  const [sidebarSocial, setSidebarSocial] = useState(false);
  const [sidebarEntertainment, setSidebarEntertainment] = useState(false);
  const [sidebarBusiness, setSidebarBusiness] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState(true);

  return (
    <>
      <div
        className={`${
          sidebarMenu
            ? "scale-0 md:w-[30%] lg:w-[25%] xl:w-[18%] duration-300"
            : "scale-100  md:w-[10%] lg:w-[8%] xl:w-[6%] duration-300"
        } fixed h-screen bg-white z-30 top-0 right-0 md:left-0 w-[60%] md:scale-100 shadow-2x border-r `}
      >
        <Link to="/" className="no-underline">
          <div className="h-16 border-b shadow-lg grid grid-flow-col items-center justify-center gap-2 bg-OrianSoft cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className={`h-10 w-10 border rounded-full`}
            />
            <span
              className={`text-white text-base md:text-xl ${
                sidebarMenu ? " duration-300" : "md:hidden duration-300"
              }`}
            >
              EveryThings
            </span>
          </div>
        </Link>
        <div className="grid grid-flow-row ">
          <div className="mt-3">
            <NavLink
              to="/user/profile"
              className="shadow  border rounded-md flex justify-center items-center space-x-2 p-2 mx-2  hover:bg-blue-400 hover:text-white"
            >
              <figure
                className={`${
                  sidebarMenu ? "bg-none" : "ring ring-green-500 rounded-full"
                }`}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </figure>

              <span
                className={`${
                  sidebarMenu ? "" : "md:hidden"
                } font-light md:relative md:flex items-center`}
                title="Profile"
              >
                Comus Bala
                <BsCircle
                  className={`${
                    sidebarMenu
                      ? "left-[84px] duration-300"
                      : " hidden duration-300"
                  } shadow-lg absolute  text-xs text-green-500 bg-green-500 rounded-full`}
                />
              </span>
            </NavLink>
          </div>
          <div className="mt-3">
            <NavLink
              to="/"
              className="shadow border rounded-md flex justify-center items-center  space-x-2 p-2 mx-2 hover:bg-blue-400 hover:text-white"
            >
              <AiTwotoneHome className="text-lg" />
              <span
                className={`${
                  sidebarMenu ? "inline-block" : "md:hidden"
                } text-sm md:text-base`}
              >
                Home
              </span>
            </NavLink>
          </div>
          <hr className="border-gray-400 mt-3" />
          <div
            className={` border-gray-400 border rounded-md grid grid-cols-8  ${
              sidebarMenu ? "md:grid-cols-12" : "md:grid-cols-1 "
            }  justify-center items-center mt-3  p-1 mx-2 bg-gray-100`}
          >
            <div className="col-span-7 md:col-span-11">
              <input
                type="text"
                name="search"
                id="search"
                placeholder=" Search"
                className={`h-8 w-[50vw] md:w-[23.5vw] lg:w-[20vw] xl:w-[14.5vw] outline-none focus:px-2 border  rounded-md ${
                  sidebarMenu ? "" : "md:hidden"
                } placeholder:text-sm`}
              />
            </div>
            <div className=" col-span-1 md:col-span-1 mx-auto items-center">
              <BiSearch
                className="text-lg cursor-pointer"
                onClick={() => setSidebarSearch(!sidebarSearch)}
              />
              <div
                className={`${
                  sidebarSearch || sidebarMenu
                    ? " hidden"
                    : "hidden md:inline-block md:absolute md:z-50 md:top-4 md:left-40"
                }
                `}
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="outline-none border rounded-md h-8 md:w-[70vw] px-1 placeholder:text-sm"
                  placeholder=" Search"
                />
              </div>
            </div>
          </div>
          <hr className="border-gray-400 m-3" />
          <div
            className={`overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300  h-sideBarScroll scroll-smooth ${
              sidebarMenu ? "mx-1 md:mx-4" : "mx-1 "
            } mb-1`}
          >
            <div className={` bg-gray-100 pt-3 pb-4 rounded-lg`}>
              <div className={` ${sidebarMenu ? " md:mx-4" : "mx-2"}`}>
                <div
                  className={`grid grid-flow-col mb-4 ${
                    sidebarMenu ? "grid-cols-6" : "grid-cols-6 md:grid-cols-2"
                  }  shadow-lg border rounded-md items-center py-2 px-1 hover:bg-blue-400 hover:text-white cursor-pointer`}
                  onClick={() => setSidebarSocial(!sidebarSocial)}
                >
                  <MdPrivateConnectivity className="text-2xl" />
                  <div
                    className={`${
                      sidebarMenu ? "inline-block" : "md:hidden"
                    }  col-span-4 `}
                  >
                    Social Media
                  </div>
                  <FaAngleLeft
                    className={`${sidebarSocial ? "-rotate-90" : "rotate-0"} `}
                  />
                </div>
                <div
                  className={`${
                    sidebarMenu ? "md:ml-10 md:mx-auto" : " md:mx-2"
                  } mx-4 mb-4 ${
                    sidebarSocial ? "block duration-300" : "hidden duration-300"
                  } `}
                >
                  <NavLink to="/user/profile" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : "grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <BsFillPersonFill className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Profile
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/posts" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : "grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <BiRepost className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Posts
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/reels" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : "grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <FcFilmReel className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Reels
                      </span>
                    </div>
                  </NavLink>

                  <NavLink to="/user/groups" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <GrGroup className=" cursor-pointer mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Group
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/pages" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <SiPagekit className=" cursor-pointer mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Page
                      </span>
                    </div>
                  </NavLink>
                </div>
                <div
                  className={`grid grid-flow-col mb-4 ${
                    sidebarMenu ? "grid-cols-6" : "grid-cols-6 md:grid-cols-2"
                  }  shadow-lg border rounded-md items-center py-2 px-1 hover:bg-blue-400 hover:text-white cursor-pointer`}
                  onClick={() => setSidebarEntertainment(!sidebarEntertainment)}
                >
                  <GiPopcorn className="text-lg" />
                  <div
                    className={`${
                      sidebarMenu ? "inline-block" : "md:hidden"
                    }  col-span-4 `}
                  >
                    Entertainment
                  </div>
                  <FaAngleLeft
                    className={`${
                      sidebarEntertainment ? "-rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    sidebarMenu ? "md:ml-10 md:mx-auto" : " md:mx-2"
                  } mx-4 mb-4 ${
                    sidebarEntertainment
                      ? "block duration-300"
                      : "hidden duration-300"
                  } `}
                >
                  <NavLink to="/user/movies" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <MdLocalMovies className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Movies
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/shorts" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <FcPhotoReel className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Shorts
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/kids" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <TbMoodBoy className=" cursor-pointer mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Kids
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/education" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col  ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <FiBookOpen className=" cursor-pointer mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Education
                      </span>
                    </div>
                  </NavLink>
                </div>
                <div
                  className={`grid grid-flow-col mb-4 ${
                    sidebarMenu ? "grid-cols-6" : "grid-cols-6 md:grid-cols-2"
                  }  shadow-lg border rounded-md items-center py-2 px-1 hover:bg-blue-400 hover:text-white cursor-pointer`}
                  onClick={() => setSidebarBusiness(!sidebarBusiness)}
                >
                  <FcBusiness className="text-lg " />
                  <div
                    className={`${
                      sidebarMenu ? "inline-block" : "md:hidden"
                    } col-span-4 `}
                  >
                    Business
                  </div>
                  <FaAngleLeft
                    className={`${sidebarBusiness ? "-rotate-90" : "rotate-0"}`}
                  />
                </div>
                <div
                  className={`${
                    sidebarMenu ? "md:ml-10  md:mx-auto" : " md:mx-2"
                  } mx-4 mb-4 ${
                    sidebarBusiness
                      ? "block duration-300"
                      : "hidden duration-300"
                  } `}
                >
                  <NavLink to="/user/buy" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <MdOutlineProductionQuantityLimits className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Buy
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/sell" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <FaBitcoin className=" cursor-pointer text-lg mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Sell
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/investment" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <BiDollarCircle className=" cursor-pointer mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Investment
                      </span>
                    </div>
                  </NavLink>
                  <NavLink to="/user/rent" className="no-underline ">
                    <div
                      className={`shadow-md border rounded-md grid grid-flow-col py-2 ${
                        sidebarMenu
                          ? "grid-cols-4"
                          : " grid-cols-4 md:grid-cols-1 md:w-10"
                      } justify-center items-center mt-3 space-x-1  md:space-x-2 py-1  hover:bg-blue-400 hover:text-white cursor-pointer`}
                    >
                      <MdCarRental className=" cursor-pointer mx-auto" />
                      <span
                        className={` ${
                          sidebarMenu ? "" : "md:hidden"
                        } text-sm md:text-base col-span-3`}
                      >
                        Rent
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

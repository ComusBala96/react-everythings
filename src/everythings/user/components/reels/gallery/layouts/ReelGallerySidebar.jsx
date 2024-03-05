import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { BiCalendarEvent } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
export default function ReelGallerySidebar() {
  const [events, setEvents] = useState(false);
  const [liveEvents, setLiveEvents] = useState(false);
  const [expiredEvents, setExpiredEvents] = useState(false);
  const [createLiveEvent, setCreateLiveEvent] = useState(false);
  return (
    <>
      <div className="col-span-5  space-y-2 pb-4 sticky top-32 h-postSidebarHeight">
        <div className="overflow-auto top-36 h-postSidebarHeight  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200 ">
          <div className="bg-white shadow-md p-4">
            <div className="bg-gray-100 shadow-lg rounded-md p-4 ">
              <div className="flex flex-col gap-2 ">
                <div className="grid grid-cols-12 items-center justify-between">
                  <div
                    className="col-span-6"
                    title="Between 2 min to 5 min video"
                  >
                    <NavLink
                      to="/user/reel/gallery/shorts"
                      className=" flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                    >
                      <VscTriangleRight />
                      <span className="hover:text-black/70">Shorts</span>
                    </NavLink>
                  </div>
                  <div className="text-right col-span-5">
                    <button className=""></button>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-between">
                  <div
                    className="col-span-6"
                    title="Between 5 min to 10 min video"
                  >
                    <NavLink
                      to="/user/reel/gallery/longs"
                      className=" flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                    >
                      <VscTriangleRight />
                      <span className="hover:text-black/70">Longs</span>
                    </NavLink>
                  </div>
                  <div className="text-right col-span-5">
                    <button className=""></button>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6" title="Specific to any blog">
                    <NavLink
                      to="/user/reel/gallery/blogs"
                      className=" flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                    >
                      <VscTriangleRight />
                      <span className="hover:text-black/70">Blogs</span>
                    </NavLink>
                  </div>
                  <div className="text-right col-span-5">
                    <button className=""></button>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6" title="Frequently uploded video">
                    <NavLink
                      to="/user/reel/gallery/mixed"
                      className=" flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                    >
                      <VscTriangleRight />
                      <span className="hover:text-black/70">Mixed</span>
                    </NavLink>
                  </div>
                  <div className="text-right col-span-5">
                    <button className=""></button>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6">
                    <div
                      className=" cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                      onClick={() => setEvents(!events)}
                    >
                      <VscTriangleRight
                        className={`${events ? "rotate-90" : ""}`}
                      />
                      <div className="flex gap-6">
                        <span className={`hover:text-black/70`}>Events</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    events ? "flex " : "hidden"
                  } ml-6  flex-col gap-2 `}
                >
                  <div className="grid grid-cols-12 items-center justify-between">
                    <div className="col-span-7 ">
                      <div
                        onClick={() => setLiveEvents(!liveEvents)}
                        className="hover:text-black/70 cursor-pointer flex items-center justify-between bg-white shadow px-2 py-1 rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <VscTriangleRight
                            className={`${liveEvents ? "rotate-90" : ""}`}
                          />
                          <span className="hover:text-black/70">
                            Live Events
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button className="text-lg text-red-700/80 animate-pulse">
                            <HiOutlineStatusOnline />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-right col-span-4 ml-1"
                      title="Create Live Event"
                      onClick={() => setCreateLiveEvent(!createLiveEvent)}
                    >
                      <button className="text-lg">
                        <MdCreateNewFolder />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`${
                      createLiveEvent ? "grid" : "hidden"
                    } ml-10 grid-cols-12 items-center justify-between `}
                  >
                    <div className="col-span-10">
                      <div className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-full pl-1 outline-none"
                          placeholder=" Write event name?"
                        />
                      </div>
                    </div>
                    <div
                      className=" col-span-1 flex items-center ml-1"
                      title="Add Live Event"
                    >
                      <button className="text-lg">
                        <BsFillPlusCircleFill />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${
                      liveEvents ? " hidden" : "hidden"
                    } ml-10 grid grid-cols-12 items-center justify-between  `}
                  >
                    <div className="col-span-10">
                      <div className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md">
                        <span className="hover:text-black/70">
                          No Live Event Found
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      liveEvents ? "flex " : "hidden"
                    } ml-10  flex-col pb-2 gap-2 `}
                  >
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/reel/gallery/events"
                          className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                        >
                          <span className="hover:text-black/70">
                            Kuyakata Tur
                          </span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/reel/gallery/events"
                          className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                        >
                          <span className="hover:text-black/70">
                            Cox's Bazar Tur 2023
                          </span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/reel/gallery/events"
                          className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                        >
                          <span className="hover:text-black/70">
                            Sylhet Tur
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    events ? "flex " : "hidden"
                  } ml-6  flex-col gap-2 `}
                >
                  <div className="grid grid-cols-12 items-center justify-between">
                    <div className="col-span-7 ">
                      <div
                        onClick={() => setExpiredEvents(!expiredEvents)}
                        className="hover:text-black/70 cursor-pointer flex items-center justify-between bg-white shadow px-2 py-1 rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <VscTriangleRight
                            className={`${expiredEvents ? "rotate-90" : ""}`}
                          />
                          <span className="hover:text-black/70">
                            Expired Events
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button className="text-lg text-red-700/80 animate-pulse">
                            <FcExpired />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      expiredEvents ? "flex " : "hidden"
                    } ml-10  flex-col gap-2 pb-2 `}
                  >
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/reel/gallery/events"
                          className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                        >
                          <span className="hover:text-black/70">
                            Kuyakata Tur
                          </span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/reel/gallery/events"
                          className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                        >
                          <span className="hover:text-black/70">
                            Cox's Bazar Tur 2023
                          </span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/reel/gallery/events"
                          className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                        >
                          <span className="hover:text-black/70">
                            Sylhet Tur
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

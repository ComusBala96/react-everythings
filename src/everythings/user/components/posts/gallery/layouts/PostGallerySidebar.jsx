import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { BiCalendarEvent } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";

export default function PostGallerySidebar({
  events,
  setEvents,
  liveEvents,
  setLiveEvents,
  expiredEvents,
  setExpiredEvents,
  meetings,
  setMeetings,
  liveMeetings,
  setLiveMeetings,
  expiredMeetings,
  setExpiredMeetings,
  lives,
  setLives,
  goLive,
  setGoLive,
  createLiveEvent,
  setCreateLiveEvent,
}) {
  return (
    <>
      <div className="col-span-5  space-y-2 pb-4 sticky top-32 h-postSidebarHeight">
        <div className="overflow-auto top-36 h-postSidebarHeight  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200 ">
          <div className="bg-white shadow-md p-4">
            <div className="bg-gray-100 shadow-lg rounded-md p-4 ">
              <div className="flex flex-col gap-2 ">
                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6">
                    <NavLink
                      to="/user/post/gallery/blog"
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
                  <div className="col-span-6">
                    <NavLink
                      to="/user/post/gallery/article"
                      className=" flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                    >
                      <VscTriangleRight />
                      <span className="hover:text-black/70">Articles</span>
                    </NavLink>
                  </div>
                  <div className="text-right col-span-5">
                    <button className=""></button>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6">
                    <NavLink
                      to="/user/post/gallery/news"
                      className=" flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                    >
                      <VscTriangleRight />
                      <span className="hover:text-black/70">News</span>
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
                  </div>
                  <div
                    className={`${
                      liveEvents ? "flex " : "hidden"
                    } ml-10  flex-col pb-2 gap-2 `}
                  >
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6">
                    <div
                      className=" cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                      onClick={() => setMeetings(!meetings)}
                    >
                      <VscTriangleRight
                        className={`${meetings ? "rotate-90" : ""}`}
                      />
                      <div className="flex gap-6">
                        <span className={`hover:text-black/70`}>Meetings</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    meetings ? "flex " : "hidden"
                  } ml-6  flex-col gap-2 `}
                >
                  <div className="grid grid-cols-12 items-center justify-between">
                    <div className="col-span-7 ">
                      <div
                        onClick={() => setLiveMeetings(!liveMeetings)}
                        className="hover:text-black/70 cursor-pointer flex items-center justify-between bg-white shadow px-2 py-1 rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <VscTriangleRight
                            className={`${liveMeetings ? "rotate-90" : ""}`}
                          />
                          <span className="hover:text-black/70">
                            Live Meetings
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button className="text-lg text-red-700/80 animate-pulse">
                            <HiOutlineStatusOnline />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      liveMeetings ? "flex " : "hidden"
                    } ml-10  flex-col gap-2 pb-2 `}
                  >
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                    meetings ? "flex " : "hidden"
                  } ml-6  flex-col gap-2 `}
                >
                  <div className="grid grid-cols-12 items-center justify-between">
                    <div className="col-span-7 ">
                      <div
                        onClick={() => setExpiredMeetings(!expiredMeetings)}
                        className="hover:text-black/70 cursor-pointer flex items-center justify-between bg-white shadow px-2 py-1 rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <VscTriangleRight
                            className={`${expiredMeetings ? "rotate-90" : ""}`}
                          />
                          <span className="hover:text-black/70">
                            Expired Meetings
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
                      expiredMeetings ? "flex " : "hidden"
                    } ml-10  flex-col gap-2 pb-2 `}
                  >
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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

                <div className="grid grid-cols-12 items-center justify-between">
                  <div className="col-span-6">
                    <div
                      className=" cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
                      onClick={() => setLives(!lives)}
                    >
                      <VscTriangleRight
                        className={`${lives ? "rotate-90" : ""}`}
                      />
                      <div className="flex gap-6">
                        <span className={`hover:text-black/70`}>Lives</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    lives ? "flex " : "hidden"
                  } ml-6  flex-col gap-2 `}
                >
                  <div className="grid grid-cols-12 items-center justify-between">
                    <div className="col-span-7 ">
                      <div
                        onClick={() => setGoLive(!goLive)}
                        className="hover:text-black/70 cursor-pointer flex items-center justify-between bg-white shadow px-2 py-1 rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <VscTriangleRight
                            className={`${goLive ? "rotate-90" : ""}`}
                          />
                          <span className="hover:text-black/70">Go Live</span>
                        </div>
                        <div className="flex items-center">
                          <button className="text-lg text-red-700/80 animate-pulse">
                            <HiOutlineStatusOnline />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      goLive ? "flex " : "hidden"
                    } ml-10  flex-col gap-2 pb-2 `}
                  >
                    <div className="grid grid-cols-12 items-center justify-between">
                      <div className="col-span-10">
                        <NavLink
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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
                          to="/user/post/gallery/event"
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

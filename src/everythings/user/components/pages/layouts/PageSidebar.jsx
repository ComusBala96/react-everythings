import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { BiCalendarEvent } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";

export default function PageSidebar() {
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
                      to="/user/pages/blogs"
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
                      to="/user/pages/articles"
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
                      to="/user/pages/news"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

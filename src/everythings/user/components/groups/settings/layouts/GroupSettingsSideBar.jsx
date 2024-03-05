import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function GroupSettingsSideBar() {
  return (
    <>
      <div className="col-span-3 sticky top-44 h-[400px]">
        <div className=" bg-white shadow-sm ml-2">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Group Settings</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <NavLink to="/user/group/settings/coustom" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Coustom</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/group/settings/blog" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Blog</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/group/settings/article" className=" no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Article</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/group/settings/news" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">News</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

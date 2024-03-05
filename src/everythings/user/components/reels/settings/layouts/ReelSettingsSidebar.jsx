import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function ReelSettingsSidebar() {
  return (
    <>
      <div className="col-span-3 sticky top-44 h-[400px]">
        <div className=" bg-white shadow-sm ml-2">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Reel Settings</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <NavLink to="/user/reel/settings" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Reel</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/reel/settings/shorts" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Short</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/reel/settings/longs" className=" no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Long</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/reel/settings/blogs" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Blog</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/reel/settings/mixed" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4 ">
                <span className="text-base py-2">Mixed</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/reel/settings/events" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4 ">
                <span className="text-base py-2">Event</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { VscTriangleRight } from "react-icons/vsc";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default function FriendsSideBar() {
  const [requests, setRequests] = useState(false);
  return (
    <>
      <div className="col-span-5 h-96 bg-white shadow-md pb-4 sticky top-32">
        <div className="bg-gray-100 m-4 flex justify-between shadow-lg rounded-md">
          <div className="flex flex-col m-4  p-2 gap-2 w-52">
            <NavLink
              to="/user/friends/suggestions"
              className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
            >
              <VscTriangleRight />
              <span className="hover:text-black/70">Suggestions</span>
            </NavLink>
            <div
              className="cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              onClick={() => setRequests(!requests)}
            >
              <VscTriangleRight className={`${requests ? "rotate-90" : ""}`} />
              <span className={`hover:text-black/70`}>Requests</span>
            </div>
            <div
              className={`${
                requests ? "flex " : "hidden"
              } ml-12  flex-col gap-2 pb-2 `}
            >
              <NavLink
                to="/user/friends/recents"
                className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              >
                <VscTriangleRight />
                <span className="hover:text-black/70">Recents</span>
              </NavLink>
              <NavLink
                to="/user/friends/forgotten"
                className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              >
                <VscTriangleRight />
                <span className="hover:text-black/70">Forgotten</span>
              </NavLink>
              <NavLink
                to="/user/friends/pendings"
                className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              >
                <VscTriangleRight />
                <span className="hover:text-black/70">Pendings</span>
              </NavLink>
            </div>
            <NavLink
              to="/user/friends/blocked"
              className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
            >
              <VscTriangleRight />
              <span className="hover:text-black/70">Blocked</span>
            </NavLink>
            <NavLink
              to="/user/friends/canceled"
              className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
            >
              <VscTriangleRight />
              <span className="hover:text-black/70">Canceled</span>
            </NavLink>
          </div>

          <NavLink className="float-right px-4 py-2" title="Action">
            <BiDotsHorizontalRounded className="text-xl" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { VscTriangleRight } from "react-icons/vsc";
import { BiImageAdd } from "react-icons/bi";
export default function GallerySideBar() {
  const [albums, setAlbums] = useState(false);
  return (
    <>
      <div className="col-span-5 h-96 bg-white shadow-md pb-4 sticky top-32">
        <div className="bg-gray-100 m-4 flex justify-between shadow-lg rounded-md">
          <div className="flex flex-col m-4  p-2 gap-2 w-52">
            <NavLink
              to="/user/gallery/galleries"
              className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
            >
              <VscTriangleRight />
              <span className="hover:text-black/70">Gallery</span>
            </NavLink>
            <NavLink
              to="/user/gallery/profiles"
              className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
            >
              <VscTriangleRight />
              <span className="hover:text-black/70">Profiles</span>
            </NavLink>
            <NavLink
              to="/user/gallery/covers"
              className="flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
            >
              <VscTriangleRight />
              <span className="hover:text-black/70">Covers</span>
            </NavLink>
            <div
              className=" cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              onClick={() => setAlbums(!albums)}
            >
              <VscTriangleRight className={`${albums ? "rotate-90" : ""}`} />
              <span className={`hover:text-black/70`}>Albums</span>
            </div>
            <div
              className={`${
                albums ? "flex " : "hidden"
              } ml-12  flex-col gap-2 pb-2 `}
            >
              <NavLink
                to="/user/gallery/album/family"
                className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              >
                <VscTriangleRight />
                <span className="hover:text-black/70">Family</span>
              </NavLink>
              <NavLink
                to="/user/gallery/album/friends"
                className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              >
                <VscTriangleRight />
                <span className="hover:text-black/70">Friends</span>
              </NavLink>
              <NavLink
                to="/user/gallery/album/relatives"
                className="hover:text-black/70 cursor-pointer flex items-center space-x-2 bg-white shadow px-2 py-1 rounded-md"
              >
                <VscTriangleRight />
                <span className="hover:text-black/70">Relatives</span>
              </NavLink>
            </div>
          </div>

          <NavLink className="float-right px-4 py-2" title="Create Album">
            <BiImageAdd className="text-xl" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

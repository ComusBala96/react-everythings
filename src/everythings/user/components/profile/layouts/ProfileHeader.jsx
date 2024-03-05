import React from "react";
import banner from "../../../../../images/banner/default.jpg";
import logo from "../../../../../images/logo/default.png";
import { BsCamera } from "react-icons/bs";
export default function ProfileHeader() {
  return (
    <>
      <div
        className="relative md:mx-36 mt-10 rounded border flex flex-col bg-no-repeat bg-cover justify-center items-center h-[20rem]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute  top-0 right-0 pt-3  rounded-sm rounded-br-none w-28 h-14 opacity-80 bg-gray-300 hover:bg-gray-400 hover:opacity-90 duration-300">
          <label htmlFor="cover" className="cursor-pointer text-white">
            <div className="flex flex-col items-center ">
              <BsCamera />
              <span className="text-sm">Update Cover</span>
            </div>
            <input type="file" name="cover" className="hidden" id="cover" />
          </label>
        </div>
        <div
          className="absolute border bg-white border-blue-400 -bottom-16 rounded-full  overflow-hidden w-48 h-48 bg-no-repeat bg-cover items-center shadow-md"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        >
          <div className="absolute bottom-0 items-center h-16 w-full opacity-80 bg-gray-400 hover:bg-gray-400 hover:opacity-90 duration-300">
            <label htmlFor="profile" className="cursor-pointer ">
              <div className="flex flex-col items-center absolute bottom-4 w-full text-white">
                <BsCamera />
                <span className="text-sm">Update Profile</span>
              </div>
              <input
                type="file"
                name="profile"
                className="hidden"
                id="profile"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="w-full mt-16 mb-4 flex flex-col items-center p-1">
        <span>Comus Bala (Nick Name)</span>
        <small>Ocupation</small>
      </div>
    </>
  );
}

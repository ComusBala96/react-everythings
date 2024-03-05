import React from "react";
import { Link } from "react-router-dom";
import { BiDotsHorizontal } from "react-icons/bi";
export default function Password() {
  return (
    <>
      <div className="col-span-9 h-settingsBoxHeight">
        <div className=" bg-white shadow-sm mb-4">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Password</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <div className="mx-10  flex flex-col gap-6 px-2 py-6">
            <div className="grid grid-cols-10 ">
              <label htmlFor="name" className="col-span-2">
                Current Password:
                <span className="text-red-500 font-bold"> *</span>
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Your Current Password"
                className="col-span-8 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
              />
            </div>
            <div className="grid grid-cols-10">
              <label htmlFor="name" className="col-span-2">
                New Password:
                <span className="text-red-500 font-bold"> *</span>
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Your New Password"
                className="col-span-8 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
              />
            </div>
            <div className="grid grid-cols-10">
              <label htmlFor="name" className="col-span-2">
                Verify Password:
                <span className="text-red-500 font-bold"> *</span>
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Re-Enter Your New Password"
                className="col-span-8 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
              />
            </div>
            <div className="col-span-12 text-end mb-4 mx-3">
              <Link className="no-underline " to="/save">
                <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-full px-4 py-1.5 cursor-pointer text-md ">
                  Save Changes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import profile from "../../../../../images/user/profile/profile-1.jpg";
export default function DeleteUser() {
  return (
    <>
      <div className="col-span-9 h-settingsBoxHeight">
        <div className=" bg-white shadow-sm">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Delete account</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col items-center py-4">
            <img
              src={profile}
              alt="profile"
              className="rounded-full w-40 h-40 shadow border-2 border-blue-600/50"
            />
          </div>
          <div className="flex justify-between mx-6 py-6 border-y">
            <div className=" w-full flex flex-col gap-6">
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="" className="col-span-3">
                  Full Name:
                </label>
                <span className="bg-gray-100 border col-span-9  mr-6 pl-2 py-1 rounded">
                  Comus Bala
                </span>
              </div>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="" className="col-span-3">
                  Email:
                </label>
                <span className="bg-gray-100 border col-span-9  mr-6 pl-2 py-1 rounded">
                  comusbala96@gmail.com
                </span>
              </div>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="" className="col-span-3">
                  Phone:
                </label>
                <span className="bg-gray-100 border col-span-9  mr-6 pl-2 py-1 rounded">
                  01875736965
                </span>
              </div>
            </div>
            <div className=" w-full flex flex-col gap-6">
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="" className="col-span-3">
                  Username:
                </label>
                <span className="bg-gray-100 border col-span-9  mr-6 pl-2 py-1 rounded">
                  ComusBala96
                </span>
              </div>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="" className="col-span-3">
                  Nick Name:
                </label>
                <span className="bg-gray-100 border col-span-9  mr-6 pl-2 py-1 rounded">
                  Orian AD
                </span>
              </div>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="" className="col-span-3">
                  Address:
                </label>
                <span className="bg-gray-100 border col-span-9  mr-6 pl-2 py-1 rounded">
                  H-467, Bagan Uttor Para, Kotalipara, Gopalgonj, Bangladesh -
                  8110
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <button className="my-4 bg-red-700/80 hover:bg-red-700 text-white px-3 py-1 rounded-md">
              Move To Trash
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

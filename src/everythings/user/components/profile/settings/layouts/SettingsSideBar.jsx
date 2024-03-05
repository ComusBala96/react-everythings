import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function SettingsSideBar() {
  return (
    <>
      <div className="col-span-3 sticky top-44 h-96">
        <div className=" bg-white shadow-sm ml-2">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Profile Settings</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <NavLink to="/user/settings" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Account</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/settings/email" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Email</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/settings/password" className=" no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Password</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/settings/privacy" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4">
                <span className="text-base py-2">Privacy and safety</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/user/settings/email/notification"
            className="no-underline"
          >
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4 ">
                <span className="text-base py-2">Email notifications</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/user/settings/web/notification"
            className="no-underline"
          >
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4 ">
                <span className="text-base py-2">Web notifications</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/settings/account/details" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4 ">
                <span className="text-base py-2">Your Data</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/user/settings/delete/account" className="no-underline">
            <div className="border-b py-1 hover:bg-blue-400">
              <div className="flex justify-between items-center mx-4 ">
                <span className="text-base py-2">Delete Account</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

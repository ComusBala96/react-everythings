import React from "react";
import { GrUserSettings } from "react-icons/gr";
import { RxActivityLog } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Log({ log, closeNotification }) {
  return (
    <>
      <div
        className={`${
          log
            ? "hidden"
            : "fixed z-30 bg-white shadow-lg rounded-md border  w-72  p-3 flex flex-col top-14 right-60 space-y-2"
        } `}
      >
        <Link
          to="/user/profile"
          className="no-underline hover:font-medium"
          onClick={closeNotification}
        >
          <div className="flex space-x-3 items-center">
            <BsFillPersonFill />
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/user/settings" className="no-underline hover:font-medium">
          <div className="flex space-x-3 items-center">
            <GrUserSettings />
            <span>Settings</span>
          </div>
        </Link>
        <Link to="/user/activity" className="no-underline hover:font-medium">
          <div className="flex space-x-3 items-center">
            <RxActivityLog />
            <span>Activity Log</span>
          </div>
        </Link>
        <hr className="" />
        <Link to="/logout" className="no-underline hover:font-medium">
          <div className="flex space-x-3 items-center">
            <FiLogOut />
            <span>Logout (Comus Bala )</span>
          </div>
        </Link>
      </div>
    </>
  );
}

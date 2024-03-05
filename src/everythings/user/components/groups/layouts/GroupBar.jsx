import React from "react";
import { NavLink } from "react-router-dom";
export default function GroupBar() {
  return (
    <>
      <div className=" sticky top-16 z-20 bg-white">
        <div className="grid grid-flow-col gap-6 justify-center items-center bg-sticky_navbar py-3 text-white">
          <NavLink to="/user/groups">
            <span className="hover:text-white/80">Groups</span>
          </NavLink>
          {/* <NavLink to="/user/posts/upload">
            <span className="hover:text-white/80">Upload</span>
          </NavLink> */}
          <NavLink to="/user/group/gallery">
            <span className="hover:text-white/80">Gallery</span>
          </NavLink>
          <NavLink to="/user/group/activity">
            <span className="hover:text-white/80">Activity</span>
          </NavLink>
          <NavLink to="/user/group/settings">
            <span className="hover:text-white/80">Settings</span>
          </NavLink>
          <NavLink to="/logout">
            <span className="hover:text-white/80">Logout</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

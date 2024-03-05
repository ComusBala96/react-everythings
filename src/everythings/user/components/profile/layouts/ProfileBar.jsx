import React from "react";
import { NavLink } from "react-router-dom";

export default function ProfileBar() {
  return (
    <>
      <div className=" sticky top-16 z-20 bg-white">
        <div className="grid grid-flow-col gap-6 justify-center items-center bg-sticky_navbar py-3 text-white">
          <NavLink to="/user/profile">
            <span className="hover:text-white/80">Profile</span>
          </NavLink>

          <NavLink to="/user/gallery">
            <span className="hover:text-white/80">Gallery</span>
          </NavLink>
          <NavLink to="/user/friends">
            <span className="hover:text-white/80">Friends</span>
          </NavLink>
          <NavLink to="/user/about">
            <span className="hover:text-white/80">About</span>
          </NavLink>
          <NavLink to="/user/activity">
            <span className="hover:text-white/80">Activity</span>
          </NavLink>
          <NavLink to="/user/settings">
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

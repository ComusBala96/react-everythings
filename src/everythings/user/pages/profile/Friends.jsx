import React from "react";
import ProfileBar from "../../components/profile/layouts/ProfileBar";
import CommonHeader from "../../components/profile/layouts/CommonHeader";
import FriendsSideBar from "../../components/profile/friends/layouts/FriendsSideBar";
import { Outlet } from "react-router-dom";
export default function Friends() {
  return (
    <>
      <CommonHeader />
      <ProfileBar />
      <div className=" mt-4 mx-10">
        <div className="grid grid-cols-12 gap-4">
          <FriendsSideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

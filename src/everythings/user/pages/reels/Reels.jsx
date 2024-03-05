import React from "react";
import CommonHeader from "../../components/profile/layouts/CommonHeader";
import { Outlet } from "react-router-dom";
import ReelBar from "../../components/reels/layouts/ReelBar";
import ReelSidebar from "../../components/reels/layouts/ReelSidebar";
export default function Reels() {
  return (
    <>
      <CommonHeader />
      <ReelBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <ReelSidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

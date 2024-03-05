import React from "react";
import CommonHeader from "../../components/profile/layouts/CommonHeader";
import ProfileBar from "../../components/profile/layouts/ProfileBar";
import { Outlet } from "react-router-dom";
import GallerySideBar from "../../components/profile/gallery/layouts/GallerySideBar";

export default function Gallery() {
  return (
    <>
      <CommonHeader />
      <ProfileBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <GallerySideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

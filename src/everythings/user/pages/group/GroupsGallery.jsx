import React from "react";
import GroupBar from "../../components/groups/layouts/GroupBar";
import { Outlet } from "react-router-dom";
import GroupGallerySidebar from "../../components/groups/gallery/layouts/GroupGallerySidebar";

export default function GroupsGallery() {
  return (
    <>
      <GroupBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <GroupGallerySidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

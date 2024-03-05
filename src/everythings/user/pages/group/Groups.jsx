import React from "react";
import { Outlet } from "react-router-dom";
import GroupBar from "../../components/groups/layouts/GroupBar";
import GroupSidebar from "../../components/groups/layouts/GroupSidebar";
export default function Group() {
  return (
    <>
      <GroupBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <GroupSidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

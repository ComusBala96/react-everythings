import React from "react";
import GroupBar from "../../components/groups/layouts/GroupBar";
import GroupSettingsSideBar from "../../components/groups/settings/layouts/GroupSettingsSideBar";
import { Outlet } from "react-router-dom";

export default function GroupSettings() {
  return (
    <>
      <GroupBar />
      <div className="text-3xl p-3 ml-2 sticky top-28 bg-gray-100">
        Settings
      </div>
      <div className="grid grid-cols-12 gap-4">
        <GroupSettingsSideBar className="sticky top-40" />
        <Outlet />
      </div>
    </>
  );
}

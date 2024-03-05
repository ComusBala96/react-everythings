import React from "react";
import ProfileBar from "../../components/profile/layouts/ProfileBar";
import { Outlet } from "react-router-dom";
import SettingsSideBar from "../../components/profile/settings/layouts/SettingsSideBar";

export default function Settings() {
  return (
    <>
      <ProfileBar />
      <div className="text-3xl p-3 ml-2 sticky top-28 bg-gray-100">Settings</div>
      <div className="grid grid-cols-12 gap-4">
        <SettingsSideBar className="sticky top-40" />
        <Outlet />
      </div>
    </>
  );
}

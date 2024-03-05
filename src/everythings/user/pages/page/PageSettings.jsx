import React from "react";
import PageBar from "../../components/pages/layouts/PageBar";
import PageSettingsSidebar from "../../components/pages/settings/layouts/PageSettingsSidebar";
import { Outlet } from "react-router-dom";

export default function PageSettings() {
  return (
    <>
      <PageBar />
      <div className="text-3xl p-3 ml-2 sticky top-28 bg-gray-100">
        Settings
      </div>
      <div className="grid grid-cols-12 gap-4">
        <PageSettingsSidebar className="sticky top-40" />
        <Outlet />
      </div>
    </>
  );
}

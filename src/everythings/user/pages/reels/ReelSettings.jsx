import React from 'react'
import ReelBar from '../../components/reels/layouts/ReelBar';
import ReelSettingsSidebar from '../../components/reels/settings/layouts/ReelSettingsSidebar';
import {Outlet} from 'react-router-dom'
export default function ReelSettings() {
  return (
    <>
      <ReelBar />
      <div className="text-3xl p-3 ml-2 sticky top-28 bg-gray-100">
        Settings
      </div>
      <div className="grid grid-cols-12 gap-4">
        <ReelSettingsSidebar className="sticky top-40" />
        <Outlet />
      </div>
    </>
  );
}

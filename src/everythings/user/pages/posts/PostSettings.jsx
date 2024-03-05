import React from 'react'
import PostBar from '../../components/posts/layouts/PostBar';
import { Outlet } from "react-router-dom";
import PostSettingsSideBar from '../../components/posts/settings/layouts/PostSettingsSidebar';
export default function PostSettings() {
  return (
    <>
      <PostBar />
      <div className="text-3xl p-3 ml-2 sticky top-28 bg-gray-100">
        Settings
      </div>
      <div className="grid grid-cols-12 gap-4">
        <PostSettingsSideBar className="sticky top-40" />
        <Outlet />
      </div>
    </>
  );
}

import React from "react";
import CommonHeader from "../../components/profile/layouts/CommonHeader";
import PostBar from "../../components/posts/layouts/PostBar";
import PostSidebar from "../../components/posts/layouts/PostSidebar";
import { Outlet } from "react-router-dom";
export default function Posts() {
  return (
    <>
      <CommonHeader />
      <PostBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <PostSidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

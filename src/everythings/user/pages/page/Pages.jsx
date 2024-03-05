import React from "react";
import { Outlet } from "react-router-dom";
import PageBar from "../../components/pages/layouts/PageBar";
import PageSidebar from "../../components/pages/layouts/PageSidebar";
export default function Pages() {
  return (
    <>
      <PageBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <PageSidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

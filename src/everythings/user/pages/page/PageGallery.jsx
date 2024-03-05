import React from "react";
import PageBar from "../../components/pages/layouts/PageBar";
import { Outlet } from "react-router-dom";
import PageGallerySidebar from "../../components/pages/gallery/layouts/PageGallerySidebar";

export default function PageGallery() {
  return (
    <>
      <PageBar />

      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <PageGallerySidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

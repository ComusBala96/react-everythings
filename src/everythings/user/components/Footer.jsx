import React from "react";
import { Link } from "react-router-dom";
export default function Footer({ sidebarMenu }) {
  return (
    <>
      <div
        className={`shadow relative ${
          sidebarMenu
            ? "md:w-[70%] md:left-[30%] lg:w-[75%] lg:left-[25%] xl:w-[82%]  xl:left-[18%] duration-300"
            : "md:w-[90%] md:left-[10%] lg:w-[92%] lg:left-[8%] xl:w-[94%]  xl:left-[6%] duration-300"
        } lg:-right-[25%] lg:w-[75%] bg-gray-50 border-t px-4`}
      >
        <div className="grid grid-col-12 justify-around items-center">
          <div className="col-start-1 text-sm lg:text-base py-[18px] lg:py-4">
            <span className="font-semibold">Copyright © 2022-2030 </span>
            <Link to="/" className="">
              OrianSoft.com
            </Link>
            <span className="hidden md:inline-block">. All rights reserved.</span>
          </div>
          <span className="hidden md:block col-start-12">Version 0.1.0</span>
        </div>
      </div>
    </>
  );
}

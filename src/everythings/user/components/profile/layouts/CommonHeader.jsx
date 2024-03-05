import React from "react";
import banner from "../../../../../images/banner/default.jpg";
import logo from "../../../../../images/logo/default.png";
export default function CommonHeader() {
  return (
    <>
      <div
        className="relative md:mx-36 mt-10 rounded border flex flex-col bg-no-repeat bg-cover justify-center items-center h-[20rem]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div
          className="absolute border bg-white border-blue-400 -bottom-16 rounded-full  overflow-hidden w-48 h-48 bg-no-repeat bg-cover items-center shadow-md"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        ></div>
      </div>
      <div className="w-full mt-16 flex flex-col items-center p-1 mb-4">
        <span>Comus Bala (Nick Name)</span>
        <small>Ocupation</small>
      </div>
    </>
  );
}

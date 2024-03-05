import React from "react";

import Post from "../components/Post";
// import { useOutletContext } from "react-router-dom";
export default function WelcomeUser() {
  // const [sidebarMenu] = useOutletContext();
  
  return (
    <>
      <div className="bg-white md:py-3 ">
        <div
          className={` grid grid-flow-row gap-4 md:mx-auto md:w-96 lg:w-[60%] xl:w-[45%]`}
        >
          <Post />
        </div>
      </div>
    </>
  );
}

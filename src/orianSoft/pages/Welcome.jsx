import React from "react";
import banner from "../../images/banner/default.jpg";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <>
      <div className="bg-slate-100  py-5 mt-40 md:mt-16">
        <div
          style={{
            backgroundImage: `url(${banner})`,
          }}
          className=" md:mx-10 rounded-lg ring-2 ring-gray-200 flex flex-col bg-no-repeat bg-cover justify-center items-center h-[40rem] md:h-[44rem] lg:h-[45rem] 2xl:h-[60rem]"
        >
          <div className="text-center space-y-3">
            <div className="text-3xl md:text-5xl 2xl:text-9xl">OrianSoft</div>
            <div className="text-xl md:text-4xl 2xl:text-7xl">
              Software Solution
            </div>
            <div className="text-lg md:text-3xl 2xl:text-5xl">
              We are Team of Talented Designers
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link className="no-underline " to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-full px-4 py-1.5 cursor-pointer text-md ">
                Subscribe
              </button>
            </Link>

            <Link className="no-underline" to="/home">
              <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-full px-4 py-1.5 cursor-pointer text-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

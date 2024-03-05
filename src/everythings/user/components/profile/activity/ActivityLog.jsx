import React, { useState } from "react";
import logo from "../../../../../images/logo/default.png";
import { BiWorld, BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function ActivityLog() {
  const [dotAction1, setDotAction1] = useState(true);
  const [dotAction2, setDotAction2] = useState(true);
  const [dotAction3, setDotAction3] = useState(true);
  const [dotAction4, setDotAction4] = useState(true);
  const [dotAction5, setDotAction5] = useState(true);
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">
                Update Your Profile Image
              </span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction1(!dotAction1)}
              />
            </span>
            <div
              className={`${
                dotAction1 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">
                Update Your Cover Image
              </span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction2(!dotAction2)}
              />
            </span>
            <div
              className={`${
                dotAction2 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">Share</span>
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">Orian AD's </span>
              </Link>
              <span>Post</span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction3(!dotAction3)}
              />
            </span>
            <div
              className={`${
                dotAction3 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">Comments</span>
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">Orian AD's </span>
              </Link>
              <span>Post</span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction4(!dotAction4)}
              />
            </span>
            <div
              className={`${
                dotAction4 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">Likes</span>
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">Orian AD's </span>
              </Link>
              <span>Post</span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction4(!dotAction4)}
              />
            </span>
            <div
              className={`${
                dotAction4 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">
                Update Your Profile Image
              </span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction1(!dotAction1)}
              />
            </span>
            <div
              className={`${
                dotAction1 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">
                Update Your Cover Image
              </span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction2(!dotAction2)}
              />
            </span>
            <div
              className={`${
                dotAction2 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">Share</span>
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">Orian AD's </span>
              </Link>
              <span>Post</span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction3(!dotAction3)}
              />
            </span>
            <div
              className={`${
                dotAction3 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">Comments</span>
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">Orian AD's </span>
              </Link>
              <span>Post</span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction4(!dotAction4)}
              />
            </span>
            <div
              className={`${
                dotAction4 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md  bg-gray-100 hover:bg-gray-200">
          <div className="col-span-1 ">
            <img
              src={logo}
              alt="profile"
              className="h-8 w-8 md:h-10 md:w-10 mx-auto border rounded-full shadow"
            />
          </div>
          <div className="col-span-7">
            <div className="flex space-x-2 items-center">
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">You</span>
              </Link>
              <span className="col-span-6 md:text-base">Likes</span>
              <Link to=" " className="no-underline  col-span-3">
                <span className="font-medium md:text-base">Orian AD's </span>
              </Link>
              <span>Post</span>
            </div>
            <div className="flex space-x-2 items-center md:text-base">
              <span>1 month ago</span>
              <span>.</span>
              <Link to=" " className="no-underline">
                <span className="font-light">Comus Bala</span>
              </Link>
              <span>.</span>
              <span>
                <BiWorld />
              </span>
            </div>
          </div>
          <div className="relative col-span-1 grid justify-center">
            <span className="cursor-pointer">
              <BiDotsHorizontalRounded
                className="text-2xl text-blue-400 "
                onClick={() => setDotAction4(!dotAction4)}
              />
            </span>
            <div
              className={`${
                dotAction4 ? "hidden duration-300" : "inline-block duration-300"
              }`}
            >
              <div className="shadow absolute bg-gray-50 w-44 -left-40 top-11 md:top-12 p-3 grid grid-rows-3 gap-2 border z-10">
                <span>Action</span>
                <span>Another action</span>
                <span>Something else here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

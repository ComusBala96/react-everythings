import React, { useState } from "react";
import logo from "../../../images/logo/default.png";
import banner from "../../../images/banner/default.jpg";
import { BiWorld, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Post() {
  const [dotAction1, setDotAction1] = useState(true);
  const [dotAction2, setDotAction2] = useState(true);
  return (
    <>
      <div className="flex flex-col gap-4 bg-white">
        <div className=" bg-white shadow shadow-blue-100 border">
          <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md">
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
                  <span className="font-medium md:text-base">Comus Bala</span>
                </Link>
                <span className="col-span-6 md:text-base">
                  Update his Profile Image
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
                  dotAction1
                    ? "hidden duration-300"
                    : "inline-block duration-300"
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
          <div className="">
            <div className="ml-2 px-2 py-3 ">
              <span className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fuga ratione voluptates voluptatibus reprehenderit,
                pariatur excepturi non quaerat amet iusto aperiam quibusdam
                labore nulla possimus laborum obcaecati, quidem neque molestias.
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${banner})`,
              }}
              className=" border-y  bg-no-repeat bg-cover h-60 relative  flex justify-center"
            >
              <img
                src={logo}
                alt="profile_photo"
                className=" w-52 h-52 absolute bottom-1 rounded-full bg-slate-50 shadow p-[1px]"
              />
            </div>
          </div>
          <div className="bg-gray-100 py-4  text-sm">
            <div className="shadow py-1 border-y">
              <div className="grid grid-cols-3 h-10 text-blue-700">
                <div className="flex justify-center items-center space-x-1 cursor-pointer">
                  <AiFillLike />
                  <span>Like</span>
                </div>
                <div className="flex justify-center items-center space-x-1 cursor-pointer">
                  <FaRegComment />
                  <span>Comment</span>
                </div>
                <div className="flex justify-center items-center space-x-1 cursor-pointer">
                  <IoMdShareAlt className="text-base" />
                  <span>Share</span>
                </div>
              </div>
            </div>
            <div className="mx-2">
              <div className="flex items-center space-x-2 p-2 mt-2">
                <img
                  src={logo}
                  alt="profile"
                  className="h-10 w-10 shadow-md rounded-full"
                />
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  className="shadow-md border rounded-md w-64 h-8 outline-none no-underline focus:p-2"
                  placeholder="  Write a comment"
                />
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 ">
                  <img
                    src={logo}
                    alt="profile"
                    className="h-10 w-10 shadow-md rounded-full"
                  />
                  <div className="space-y-1 ">
                    <div className="flex flex-col space-y-2 bg-white p-2 rounded-md shadow-md">
                      <span className="text-blue-600 font-medium">
                        Comus Bala
                      </span>
                      <span className="font-medium">Very Nice</span>
                    </div>
                    <div className="flex space-x-2 items-center p-2 text-blue-600 font-medium">
                      <span>Like</span>
                      <span>Replay</span>
                      <div className="flex space-x-1">
                        <span>1</span>
                        <AiFillLike className="text-base" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <img
                        src={logo}
                        alt="profile"
                        className="h-10 w-10 shadow-md rounded-full"
                      />
                      <div className="space-y-1">
                        <div className="flex flex-col space-y-2 bg-white p-2 rounded-md shadow-md">
                          <span className="text-blue-600 font-medium">
                            Comus Bala
                          </span>
                          <span className="font-medium">Thanks</span>
                        </div>
                        <div className="flex space-x-2 items-center p-2  text-blue-600 font-medium">
                          <span>Like</span>
                          <span>Replay</span>
                          <div className="flex space-x-1">
                            <span>1</span>
                            <AiFillLike className="text-base" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow shadow-blue-100 border">
          <div className=" grid grid-flow-col grid-cols-9 text-sm py-2 border-b shadow-md">
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
                  <span className="font-medium md:text-base">Comus Bala</span>
                </Link>
                <span className="col-span-6 md:text-base">
                  Update his Profile Image
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
                  dotAction2
                    ? "hidden duration-300"
                    : "inline-block duration-300"
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
          <div className="">
            <div className="ml-2 px-2 py-3 ">
              <span className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fuga ratione voluptates voluptatibus reprehenderit,
                pariatur excepturi non quaerat amet iusto aperiam quibusdam
                labore nulla possimus laborum obcaecati, quidem neque molestias.
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${banner})`,
              }}
              className=" border-y  bg-no-repeat bg-cover h-60 relative flex justify-center"
            >
              <img
                src={logo}
                alt="profile_photo"
                className=" w-52 h-52 absolute bottom-1 rounded-full bg-slate-50 shadow p-[1px]"
              />
            </div>
          </div>
          <div className="bg-gray-100 py-4  text-sm">
            <div className="shadow py-1 border-y">
              <div className="grid grid-cols-3 h-10 text-blue-700">
                <div className="flex justify-center items-center space-x-1 cursor-pointer">
                  <AiFillLike />
                  <span>Like</span>
                </div>
                <div className="flex justify-center items-center space-x-1 cursor-pointer">
                  <FaRegComment />
                  <span>Comment</span>
                </div>
                <div className="flex justify-center items-center space-x-1 cursor-pointer">
                  <IoMdShareAlt className="text-base" />
                  <span>Share</span>
                </div>
              </div>
            </div>
            <div className="mx-2">
              <div className="flex items-center space-x-2 p-2 mt-2">
                <img
                  src={logo}
                  alt="profile"
                  className="h-10 w-10 shadow-md rounded-full"
                />
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  className="shadow-md border rounded-md w-64 h-8 outline-none no-underline focus:p-2"
                  placeholder="  Write a comment"
                />
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 ">
                  <img
                    src={logo}
                    alt="profile"
                    className="h-10 w-10 shadow-md rounded-full"
                  />
                  <div className="space-y-1 ">
                    <div className="flex flex-col space-y-2 bg-white p-2 rounded-md shadow-md">
                      <span className="text-blue-600 font-medium">
                        Comus Bala
                      </span>
                      <span className="font-medium">Very Nice</span>
                    </div>
                    <div className="flex space-x-2 items-center p-2 text-blue-600 font-medium">
                      <span>Like</span>
                      <span>Replay</span>
                      <div className="flex space-x-1">
                        <span>1</span>
                        <AiFillLike className="text-base" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <img
                        src={logo}
                        alt="profile"
                        className="h-10 w-10 shadow-md rounded-full"
                      />
                      <div className="space-y-1">
                        <div className="flex flex-col space-y-2 bg-white p-2 rounded-md shadow-md">
                          <span className="text-blue-600 font-medium">
                            Comus Bala
                          </span>
                          <span className="font-medium">Thanks</span>
                        </div>
                        <div className="flex space-x-2 items-center p-2  text-blue-600 font-medium">
                          <span>Like</span>
                          <span>Replay</span>
                          <div className="flex space-x-1">
                            <span>1</span>
                            <AiFillLike className="text-base" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

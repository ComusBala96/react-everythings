import React from "react";
import video1 from "../../../../video/movie/default1.mp4";
import logo from "../../../../images/logo/default.png";
import { BsCamera } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MovieChannelsContent() {
  return (
    <>
      <div className=" m-4 space-y-4">
        <div className="mt-4">
          <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
            <div className="flex space-x-2 ml-6">
              <div className=" flex space-x-2 items-center">
                <span className="uppercase">Channels</span>
                <FaAngleDoubleRight />
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
              >
                Create Channel
              </button>
            </div>
          </div>
        </div>
        <div className="hidden h-[10vh]  items-center justify-center">
          <div className=" flex space-x-2">
            <span>You do not created any channel Yet! Get Started to</span>
            <Link to="" className="text-blue-700 underline">
              Create
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 flex flex-row items-center space-x-8 bg-white p-4 rounded-md shadow-md">
            <div className=" flex flex-col items-center">
              <div
                className="relative cursor-pointer top-0 border bg-white border-blue-400  rounded-full  overflow-hidden w-32 h-32 bg-no-repeat bg-cover items-center shadow-md"
                style={{
                  backgroundImage: `url(${logo})`,
                }}
              >
                <div className="absolute bottom-0 items-center h-16 w-full opacity-80 bg-gray-400 hover:bg-gray-400 hover:opacity-90 duration-300">
                  <label htmlFor="profile" className="cursor-pointer ">
                    <div className="flex flex-col items-center absolute bottom-4 w-full text-white">
                      <BsCamera />
                      <span className="text-xs">Channel Image</span>
                    </div>
                    <input
                      type="file"
                      name="profile"
                      className="hidden"
                      id="profile"
                    />
                  </label>
                </div>
              </div>
              <div className="w-full">
                <div className=" flex flex-col text-center p-1">
                  <span>Brand Disel </span>
                  <small>Entertainment</small>
                  <span>Subscriber : 1.2k</span>
                  <span>Videos : 25</span>
                  <span>Playlist : 5</span>
                  <span>Created :</span>
                  <span className="pb-2"> 21-May-2023</span>
                  <button
                    type="button"
                    className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
                  >
                    Edit Channel
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-16 right-0">
                <button
                  type="button"
                  className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
                >
                  <Link to="/user/movies/upload">Upload</Link>
                </button>
              </div>
              <div className="absolute pt-3 rounded-sm rounded-br-none w-28 h-14 opacity-80 bg-gray-300 hover:bg-gray-400 hover:opacity-90 duration-300">
                <label htmlFor="cover" className="cursor-pointer text-white">
                  <div className="flex flex-col items-center ">
                    <BsCamera />
                    <span className="text-sm">Channel Video</span>
                  </div>
                  <input
                    type="file"
                    name="cover"
                    className="hidden"
                    id="cover"
                  />
                </label>
              </div>
              <video
                src={video1}
                controls
                className="w-full h-auto rounded-md cursor-pointer"
              />
            </div>
          </div>
          <div className="col-span-6 flex flex-row items-center space-x-8 bg-white p-4 rounded-md shadow-md">
            <div className=" flex flex-col items-center">
              <div
                className="relative cursor-pointer top-0 border bg-white border-blue-400  rounded-full  overflow-hidden w-32 h-32 bg-no-repeat bg-cover items-center shadow-md"
                style={{
                  backgroundImage: `url(${logo})`,
                }}
              >
                <div className="absolute bottom-0 items-center h-16 w-full opacity-80 bg-gray-400 hover:bg-gray-400 hover:opacity-90 duration-300">
                  <label htmlFor="profile" className="cursor-pointer ">
                    <div className="flex flex-col items-center absolute bottom-4 w-full text-white">
                      <BsCamera />
                      <span className="text-xs">Channel Image</span>
                    </div>
                    <input
                      type="file"
                      name="profile"
                      className="hidden"
                      id="profile"
                    />
                  </label>
                </div>
              </div>
              <div className="w-full">
                <div className=" flex flex-col text-center p-1">
                  <span>Brand Disel </span>
                  <small>Entertainment</small>
                  <span>Subscriber : 1.2k</span>
                  <span>Videos : 25</span>
                  <span>Playlist : 5</span>
                  <span>Created :</span>
                  <span className="pb-2"> 21-May-2023</span>
                  <button
                    type="button"
                    className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
                  >
                    Edit Channel
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-16 right-0">
                <button
                  type="button"
                  className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
                >
                  <Link to="/user/movies/upload">Upload</Link>
                </button>
              </div>
              <div className="absolute pt-3 rounded-sm rounded-br-none w-28 h-14 opacity-80 bg-gray-300 hover:bg-gray-400 hover:opacity-90 duration-300">
                <label htmlFor="cover" className="cursor-pointer text-white">
                  <div className="flex flex-col items-center ">
                    <BsCamera />
                    <span className="text-sm">Channel Video</span>
                  </div>
                  <input
                    type="file"
                    name="cover"
                    className="hidden"
                    id="cover"
                  />
                </label>
              </div>
              <video
                src={video1}
                controls
                className="w-full h-auto rounded-md cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
            <div className="flex space-x-2 ml-6">
              <div className=" flex space-x-2 items-center">
                <span className="uppercase">Default Channel</span>
                <FaAngleDoubleRight />
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
              >
                <Link to="/user/movies/upload">Upload</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-8 bg-white p-4 rounded-md shadow-md">
          <div className=" flex flex-col items-center">
            <div
              className="relative cursor-pointer top-0 border bg-white border-blue-400  rounded-full  overflow-hidden w-32 h-32 bg-no-repeat bg-cover items-center shadow-md"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            >
              <div className="absolute bottom-0 items-center h-16 w-full opacity-80 bg-gray-400 hover:bg-gray-400 hover:opacity-90 duration-300">
                <label htmlFor="profile" className="cursor-pointer ">
                  <div className="flex flex-col items-center absolute bottom-4 w-full text-white">
                    <BsCamera />
                    <span className="text-xs">Channel Image</span>
                  </div>
                  <input
                    type="file"
                    name="profile"
                    className="hidden"
                    id="profile"
                  />
                </label>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col text-center p-1">
                <span>Comus Bala</span>
                <small>Education</small>
                <span>Subscriber : 12k</span>
                <span>Videos : 35</span>
                <span>Playlist : 15</span>
                <span className="pb-2">Created : 21-May-2023</span>
                <button
                  type="button"
                  className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
                >
                  Edit Channel
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute pt-3 rounded-sm rounded-br-none w-28 h-14 opacity-80 bg-gray-300 hover:bg-gray-400 hover:opacity-90 duration-300">
              <label htmlFor="cover" className="cursor-pointer text-white">
                <div className="flex flex-col items-center ">
                  <BsCamera />
                  <span className="text-sm">Channel Video</span>
                </div>
                <input type="file" name="cover" className="hidden" id="cover" />
              </label>
            </div>
            <video
              src={video1}
              controls
              className="w-[780px] h-auto rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

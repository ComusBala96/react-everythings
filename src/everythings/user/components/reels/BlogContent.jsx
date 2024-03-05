import React from "react";
import logo from "../../../../images/logo/default.png";
import { GiWorld } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import Post from "../../components/Post";
export default function BlogContent() {
  return (
    <>
      <div className="col-span-7 bg-white ">
        <div className="m-4">
          <div className="shadow-md  mb-4 duration-100">
            <div className=" border-y">
              <BiDotsHorizontalRounded className="float-right mr-6 text-2xl text-blue-600 cursor-pointer" />
              <div className="m-4 flex items-center space-x-2">
                <img src={logo} alt="" className="rounded-full h-10 w-10 " />
                <div className="flex flex-col space-y-1">
                  <Link
                    to="/profile"
                    className="ml-1 font-semibold text-blue-600"
                  >
                    Comus Bala
                  </Link>
                  <div className="flex items-center space-x-1">
                    <GiWorld />
                    <select name="" id="" className="bg-gray-100 rounded-md">
                      <option value="">Public</option>
                      <option value="">Private</option>
                      <option value="">Only Me</option>
                      <option value="">Friends</option>
                      <option value="">Specific Friends</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col m-6 gap-4 border-b pb-3">
              <label htmlFor="caption" className="font-semibold">
                Caption: <span className="text-red-600 font-bold">*</span>
              </label>
              <textarea
                type="text"
                name=""
                id=""
                rows="4"
                className="ml-6 pl-2 outline-none"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="flex flex-col m-6 gap-4 ">
              <label htmlFor="files" className="font-semibold">
                Upload Video: <span className="text-red-600 font-bold">*</span>
              </label>
              <input type="file" name="" id="" className="ml-6 pl-2" multiple />
            </div>
            <div className="flex flex-col m-6 gap-4 ">
              <label htmlFor="files" className="font-semibold">
                Upload Music: <span className="text-red-600 font-bold">*</span>
              </label>
              <input type="file" name="" id="" className="ml-6 pl-2" multiple />
            </div>
            <div className=" bg-gray-100 h-2 mx-6 ">
              <div className="bg-blue-600 h-2 w-3/4"></div>
            </div>
            <div className="text-right mr-10 py-8 space-x-2">
              <button className="bg-gray-600/80 px-4 py-2 text-white rounded-md">
                Cancel
              </button>
              <button className="bg-blue-600/80 text-white px-4 py-2 rounded-md">
                Post
              </button>
            </div>
          </div>
          <Post />
        </div>
      </div>
    </>
  );
}

import React from 'react'
import logo from "../../../../../../images/logo/default.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Article() {
  return (
    <>
      <div
        className="bg-white shadow-md pt-2 mb-4 duration-100 hidden"
        id="articlesSidebarBox"
      >
        <div className=" border-b">
          <BiDotsHorizontalRounded className="float-right mr-6 text-2xl text-blue-600 cursor-pointer" />
          <div className="m-4 flex items-center space-x-2">
            <img src={logo} alt="" className="rounded-full h-10 w-10 " />
            <div className="flex flex-col space-y-1">
              <Link to="/profile" className="ml-1 font-semibold text-blue-600">
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
        <div className=" flex flex-col mx-6 my-2 gap-2 border-b pb-3">
          <label htmlFor="title" className="font-semibold">
            Article Title: <span className="text-red-600 font-bold">*</span>
          </label>
          <textarea
            type="text"
            name=""
            id=""
            className="ml-6 pl-2 outline-none"
            placeholder="Write article title?"
          ></textarea>
          <label htmlFor="title" className="font-semibold">
            Introduction: <span className="text-red-600 font-bold">*</span>
          </label>
          <textarea
            type="text"
            name=""
            id=""
            className="ml-6 pl-2 outline-none"
            placeholder="Write article intro?"
          ></textarea>
          <label htmlFor="title" className="font-semibold">
            Content: <span className="text-red-600 font-bold">*</span>
          </label>
          <textarea
            type="text"
            name=""
            id=""
            className="ml-6 pl-2 outline-none"
            placeholder="Write article content?"
          ></textarea>
          <label htmlFor="title" className="font-semibold">
            Conclusion: <span className="text-red-600 font-bold">*</span>
          </label>
          <textarea
            type="text"
            name=""
            id=""
            className="ml-6 pl-2 outline-none"
            placeholder="Write article summary?"
          ></textarea>
        </div>
        <div className="flex flex-col m-6 gap-4 ">
          <label htmlFor="files" className="font-semibold">
            Article Files: <span className="text-red-600 font-bold">*</span>
          </label>
          <input type="file" name="" id="" className="ml-6 pl-2" multiple />
        </div>
        <div className=" bg-gray-100 h-2 mx-6 ">
          <div className="bg-blue-600 h-2 w-3/4"></div>
        </div>
        <div className="text-right mr-10 py-8 space-x-2">
          <button className="bg-gray-600/80 px-2 py-1 text-white rounded-md">
            Cancel
          </button>
          <button className="bg-blue-600/80 text-white px-2 py-1 rounded-md">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState, useRef, useEffect } from "react";
import logo from "../../../../images/logo/default.png";
import { GiWorld } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function MovieUploadContent() {
  const [category, setCategory] = useState(false);
  const refCategory = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideCategoryInput, true);
  }, []);
  const hideCategoryInput = (e) => {
    if (!refCategory.current.contains(e.target)) {
      setCategory(false);
    }
  };
  return (
    <>
      <div className="mx-10">
        <div className="mt-4 bg-gray-300/50 p-2 shadow-lg text-center text-lg">
          Upload Movie
        </div>
        <div className=" mt-0">
          <div className="shadow-md bg-white mb-4 duration-100">
            <div className=" border-y">
              <BiDotsHorizontalRounded className="float-right mr-6 text-2xl text-blue-600 cursor-pointer" />
              <div className="m-4 flex items-center space-x-2">
                <img src={logo} alt="" className="rounded-full h-10 w-10 " />
                <div className="flex flex-col space-y-1">
                  <Link
                    to="/profile"
                    className="ml-1 font-semibold text-blue-600"
                  >
                    Brand Disel
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
            <form action="">
              <div className=" flex flex-col m-6 gap-4  pb-3">
                <label htmlFor="caption" className="font-semibold">
                  Title: <span className="text-red-600 font-bold">*</span>
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows="3"
                  className="ml-6 pl-2 outline-none bg-gray-100 hover:bg-gray-200/60 rounded-md pt-2"
                  placeholder="Enter the movie title?"
                ></textarea>
              </div>
              <div className=" flex flex-col m-6 gap-4 pb-3">
                <label
                  htmlFor="category"
                  className="font-semibold flex items-center justify-between"
                  ref={refCategory}
                >
                  <div className="">
                    Category: <span className="text-red-600 font-bold">*</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <div
                      className={`${
                        category ? "flex duration-300" : "hidden duration-300"
                      }  items-center space-x-2 `}
                    >
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter new category?"
                        className={`pl-1 py-[1px] outline-none border rounded-md bg-gray-100 hover:bg-gray-200/70`}
                      />
                      <AiOutlinePlusCircle className="cursor-pointer text-xl" />
                    </div>
                    <button
                      type="button"
                      className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
                      onClick={() => setCategory(!category)}
                    >
                      Create Category
                    </button>
                  </div>
                </label>
                <select
                  name=""
                  id=""
                  className="ml-6 pl-2 outline-none bg-gray-100 hover:bg-gray-200/60 rounded-md p-1 py-2"
                >
                  <option value="">Select Category</option>
                  <option value="">Hollywood</option>
                  <option value="">Bollywood</option>
                  <option value="">Kollywood</option>
                </select>
              </div>
              <div className=" flex flex-col m-6 gap-4 border-b pb-8">
                <label htmlFor="caption" className="font-semibold">
                  Tags: <span className="text-red-600 font-bold">*</span>
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows="3"
                  className="ml-6 pl-2 outline-none bg-gray-100 hover:bg-gray-200/60 rounded-md pt-2"
                  placeholder="Enter tags?"
                ></textarea>
              </div>
              <div className="flex flex-col m-6 gap-4 ">
                <label htmlFor="files" className="font-semibold">
                  File: <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  className="ml-6 pl-2"
                  multiple
                />
              </div>
              <div className="flex flex-col m-6 gap-4 ">
                <label htmlFor="files" className="font-semibold">
                  Thumbnail: <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  className="ml-6 pl-2"
                  multiple
                />
              </div>
              <div className=" bg-gray-100 h-2 mx-6 ">
                <div className="bg-blue-600 h-2 w-3/4"></div>
              </div>
              <div className="text-right mr-10 py-8 space-x-2">
                <button
                  type="reset"
                  className="bg-gray-600/80 hover:bg-gray-600 px-4 py-2 text-white rounded-md"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

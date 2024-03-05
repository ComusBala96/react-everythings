import React from "react";
import logo from "../../../../../images/logo/default.png";
import { BiDotsHorizontal } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Account() {
  return (
    <>
      <div className="col-span-9">
        <div className=" bg-white shadow-sm mb-4">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Public Info</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <div className="mx-10 py-2 grid grid-cols-12">
            <div className="col-span-8 gap-2 flex flex-col">
              <div className="p-2 grid grid-cols-12">
                <label htmlFor="name" className="col-span-3">
                  Full Name:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value="Comus Bala"
                  className="col-span-9 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Email:
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  value="comusbala96@gmail.com"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Username:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value="comusbala96"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Nick Name:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Nick Name"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Occupation:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Occupation>"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Biography:
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows="2"
                  placeholder="Tell Somethings Yourself"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full"
                ></textarea>
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Impression:
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows="4"
                  placeholder="Your Word for Impress Someone"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full"
                ></textarea>
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Description:
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows="6"
                  placeholder="Write Your Description"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full"
                ></textarea>
              </div>
              <div className="col-span-12 text-end mb-4 mx-3">
                <Link className="no-underline " to="/save">
                  <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-full px-4 py-1.5 cursor-pointer text-md ">
                    Save Changes
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-4 relative top-36">
              <div
                className="absolute ml-10 border bg-white border-blue-400  rounded-full  overflow-hidden w-48 h-48 bg-no-repeat bg-cover items-center shadow-md"
                style={{
                  backgroundImage: `url(${logo})`,
                }}
              >
                <div className="absolute bottom-0 items-center h-16 w-full opacity-80 bg-gray-400 hover:bg-gray-400 hover:opacity-90 duration-300">
                  <label htmlFor="profile" className="cursor-pointer ">
                    <div className="flex flex-col items-center absolute bottom-4 w-full text-white">
                      <BsCamera />
                      <span className="text-sm">Update Profile</span>
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
              <div className="absolute top-52 text-center ml-4">
                For best results, use an image at least 128px by 128px in .jpg
                format
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm ">
          <div className="border-b py-1 ">
            <div className="flex justify-between items-center mx-4">
              <span className="text-lg py-2">Private Info</span>
              <BiDotsHorizontal className=" cursor-pointer" />
            </div>
          </div>
          <div className="mx-10 py-2 grid grid-cols-12">
            <div className="col-span-9 gap-2 flex flex-col">
              <div className="p-2 grid grid-cols-12">
                <label htmlFor="name" className="col-span-3">
                  Date of Birth:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="col-span-9 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Gender:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <select
                  name=""
                  id=""
                  className="col-span-9 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                >
                  <option value="">Select Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Status:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <select
                  name=""
                  id=""
                  className="col-span-9 outline-none bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                >
                  <option value="">Select Status</option>
                  <option value="">Single</option>
                  <option value="">Married</option>
                  <option value="">Complicated</option>
                </select>
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Phone:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter Your Phone Number"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Address:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="address"
                  name=""
                  id=""
                  placeholder="Enter Your Address"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  City:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="city"
                  name=""
                  id=""
                  rows="2"
                  placeholder="Enter Your City"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  State:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="state"
                  name=""
                  id=""
                  rows="4"
                  placeholder="Enter Your State"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="p-2 grid grid-cols-12 ">
                <label htmlFor="email" className="col-span-3">
                  Zip:
                  <span className="text-red-500 font-bold"> *</span>
                </label>
                <input
                  type="zip"
                  name=""
                  id=""
                  rows="6"
                  placeholder="Enter Your Zip Code"
                  className="col-span-9 outline-none  bg-gray-50 pl-2 border border-yellow-300 w-full h-9"
                />
              </div>
              <div className="col-span-12 text-end mb-4 mx-3">
                <Link className="no-underline " to="/save">
                  <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-full px-4 py-1.5 cursor-pointer text-md ">
                    Save Changes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

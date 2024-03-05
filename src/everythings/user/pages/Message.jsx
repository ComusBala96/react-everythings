import React from "react";
import logo from "../../../images/logo/default.png";
import { FiClock } from "react-icons/fi";
import { AiFillAudio } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { CiCircleList } from "react-icons/ci";
import { GrGroup, GrSearch } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { IoSyncCircleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// import EmojiPicker from "emoji-picker-react";
import ReactScrollableFeed from "react-scrollable-feed";
export default function Message() {
  return (
    <>
      <div className="gap-2">
        <div className="px-2 md:py-4  bg-white border rounded-t-md shadow-lg grid-flow-row md:grid md:grid-flow-col md:grid-cols-12 gap-2 justify-center md:justify-around">
          <div className="col-span-5 md:border-r-2 hidden md:grid">
            <figure className="flex items-center space-x-1">
              <Link to="/profile">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 border rounded-full"
                  title="Logo"
                />
              </Link>
              <div className="flex flex-col">
                <Link to="/profile">
                  <span>Brad Diesel</span>
                </Link>
                <span className="text-xs">last seen today at 2:11 pm</span>
              </div>
            </figure>
          </div>
          <div className="border-b-2 py-3 md:py-0 md:border-b-0 col-span-4 flex justify-around md:grid md:grid-cols-4 items-center md:border-r-2">
            <CiCircleList className="text-xl cursor-pointer" title="Menu" />
            <GrGroup className="text-md cursor-pointer" title="Groups" />
            <IoSyncCircleOutline
              className="text-lg cursor-pointer"
              title="Status"
            />
            <MdMessage className="text-lg cursor-pointer" title="New Message" />
          </div>
          <div className="col-span-3 py-2 md:py-0 flex justify-center md:grid md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 items-center space-x-1">
            <input
              type="text"
              name="searchMessage"
              className="md:col-span-5 lg:col-span-7 xl:col-span-11 outline-none w-[80%] md:w-[100%] h-7  bg-slate-100 border rounded-sm pl-1"
              placeholder="Search"
              id="searchMessage"
            />
            <GrSearch
              className="col-span-1 text-md cursor-pointer"
              title="Search"
            />
          </div>
        </div>
        <div
          className={` md:grid md:grid-flow-col md:grid-cols-12 lg:grid-cols-10 xl:grid-cols-10 md:justify-between w-[100%]`}
        >
          <div className="md:col-span-7 lg:col-span-7 xl:col-span-8 bg-white border border-b-0 md:rounded-bl-md hidden md:grid relative ">
            <div className="h-messageBoxHeight">
              <ReactScrollableFeed className=" scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-cyan-200  py-2">
                <div className="m-4 flex flex-col gap-8 ">
                  <div className="flex justify-start">
                    <div className=" w-[60%] flex justify-start">
                      <span className=" bg-blue-200 p-2 rounded-lg">
                        message 1 Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae voluptas nesciunt saepe
                        quam fuga, sunt eligendi modi error fugit! Explicabo
                        laudantium ea tenetur eius non quas, nesciunt
                        repudiandae nobis ab.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="w-[60%] flex justify-end">
                      <span className=" bg-blue-200 p-2 rounded-lg">
                        message 2 Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Rem, eius dolorem porro doloribus
                        itaque sequi labore suscipit ad eveniet nemo fugit iste.
                        Facilis labore laborum dolorum inventore aliquam
                        deleniti fugit.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className=" w-[60%] flex justify-start">
                      <span className=" bg-blue-200 p-2 rounded-lg">
                        message 1 Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae voluptas nesciunt saepe
                        quam fuga, sunt eligendi modi error fugit! Explicabo
                        laudantium ea tenetur eius non quas, nesciunt
                        repudiandae nobis ab.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="w-[60%] flex justify-end">
                      <span className=" bg-blue-200 p-2 rounded-lg">
                        message 2 Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Rem, eius dolorem porro doloribus
                        itaque sequi labore suscipit ad eveniet nemo fugit iste.
                        Facilis labore laborum dolorum inventore aliquam
                        deleniti fugit.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className=" w-[60%] flex justify-start">
                      <span className=" bg-blue-200 p-2 rounded-lg">
                        message 1 Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae voluptas nesciunt saepe
                        quam fuga, sunt eligendi modi error fugit! Explicabo
                        laudantium ea tenetur eius non quas, nesciunt
                        repudiandae nobis ab.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="w-[60%] flex justify-end">
                      <span className=" bg-blue-200 p-2 rounded-lg">
                        message 2 Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Rem, eius dolorem porro doloribus
                        itaque sequi labore suscipit ad eveniet nemo fugit iste.
                        Facilis labore laborum dolorum inventore aliquam
                        deleniti fugit.
                      </span>
                    </div>
                  </div>
                </div>
              </ReactScrollableFeed>
              <div className="w-[100%] shadow-md  rounded-bl-md absolute bottom-0 md:grid md:grid-flow-col md:grid-cols-12 items-center md:gap-2 lg:gap-6 xl:gap-8 bg-gray-200 px-2 py-3">
                <BsEmojiSmile className="col-span-1  lg:text-xl lg:ml-2 xl:ml-6" />
                <input
                  type="text"
                  name="message"
                  className="col-span-9 placeholder:text-sm px-1 focus:outline-none focus:placeholder:invisible rounded-sm"
                  id="message"
                  placeholder="Type a message"
                />
                <div className="col-span-1">
                  <input
                    type="file"
                    name="file"
                    className="hidden invisible"
                    id="file"
                  />
                  <ImAttachment className="relative" />
                </div>
                <AiFillAudio />
              </div>
            </div>
          </div>
          <div className="md:col-span-5 h-messageHightSM md:h-messageHeight  md:w-[100%] bg-white shadow-lg border border-b-0 border-gray-300 rounded-br-md overflow-y-auto  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200">
            <div className="flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
            <div className=" flex justify-center md:grid md:grid-flow-col md:grid-cols-5 items-center p-2 border-b hover:bg-gray-50 space-x-2 md:space-x-1">
              <Link to="/profile">
                <figure className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 border rounded-full"
                    title="Logo"
                  />
                </figure>
              </Link>
              <NavLink to="/message" className={`col-span-4  text-sm`}>
                <h1 className="">Brad Diesel</h1>
                <p className="">Call me whenever you . . </p>
                <div className="grid grid-flow-col grid-cols-12 items-center space-x-1">
                  <FiClock className="" />
                  <p className="col-span-11">4 hour ago</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

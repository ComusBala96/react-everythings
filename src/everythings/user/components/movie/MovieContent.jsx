import React from "react";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { BiDotsHorizontal } from "react-icons/bi";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaShare, FaAngleDoubleRight } from "react-icons/fa";
import video1 from "../../../../video/movie/default1.mp4";
import video2 from "../../../../video/movie/default2.mp4";
import video3 from "../../../../video/movie/default3.mp4";
import video4 from "../../../../video/movie/default4.mp4";
import poster1 from "../../../../video/movie/thumb/poster1.PNG";
import poster2 from "../../../../video/movie/thumb/poster2.PNG";

export default function MovieContent() {
  return (
    <>
      <div className=" h-[75.3vh]  items-center justify-center hidden">
        <div className=" flex space-x-2">
          <span>Nothing Uploaded Yet! Get Started to</span>
          <Link to="/user/movies/upload" className="text-blue-700 underline">
            Upload
          </Link>
        </div>
      </div>
      <div className="">
        <div className="p-2 bg-gray-200 mt-4 text-xl mx-4">
          <div className="ml-6 flex space-x-2 items-center">
            <span>#Hollywood</span>
            <FaAngleDoubleRight />
          </div>
        </div>
        <div className="mx-10 my-6 grid grid-flow-row grid-cols-3 gap-7 ">
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            ></video>
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2  bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Piya Re Official Video | Darshan Raval | Gurpreet S. | Gautam S.
                | Lijo George | New Song 2023
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video2}
              controls
              poster={poster1}
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Chura Liya (Video) | Sachet - Parampara | Himansh K, Anushka S |
                Irshad K | Ashish P | Bhushan Kumar
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video3}
              controls
              poster={poster2}
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Maine Tera Naam Dil Rakh Diya (LYRICS) Shreya Ghoshal Version |
                Ek Villain Returns | Arjun | Tara
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video4}
              controls
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-gray-200 mt-4 text-xl mx-4">
          <div className="ml-6 flex space-x-2 items-center">
            <span>#Bollywood</span>
            <FaAngleDoubleRight />
          </div>
        </div>
        <div className="mx-10 my-6 grid grid-flow-row grid-cols-3 gap-7">
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            ></video>
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Piya Re Official Video | Darshan Raval | Gurpreet S. | Gautam S.
                | Lijo George | New Song 2023
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video2}
              controls
              poster={poster1}
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Chura Liya (Video) | Sachet - Parampara | Himansh K, Anushka S |
                Irshad K | Ashish P | Bhushan Kumar
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video3}
              controls
              poster={poster2}
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Maine Tera Naam Dil Rakh Diya (LYRICS) Shreya Ghoshal Version |
                Ek Villain Returns | Arjun | Tara
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video4}
              controls
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-gray-200 mt-4 text-xl mx-4">
          <div className="ml-6 flex space-x-2 items-center">
            <span>#Kollywood</span>
            <FaAngleDoubleRight />
          </div>
        </div>
        <div className="mx-10 my-6 grid grid-flow-row grid-cols-3 gap-7">
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            ></video>
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Piya Re Official Video | Darshan Raval | Gurpreet S. | Gautam S.
                | Lijo George | New Song 2023
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video2}
              controls
              poster={poster1}
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Chura Liya (Video) | Sachet - Parampara | Himansh K, Anushka S |
                Irshad K | Ashish P | Bhushan Kumar
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video3}
              controls
              poster={poster2}
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
          <div className=" border-b-8 pb-2 bg-white p-4 rounded-md shadow-md">
            <div className="mb-4 flex justify-between">
              <div className="font-semibold text-lg cursor-pointer h-28">
                Maine Tera Naam Dil Rakh Diya (LYRICS) Shreya Ghoshal Version |
                Ek Villain Returns | Arjun | Tara
              </div>
              <div className="pl-2">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video4}
              controls
              className="w-[450px] h-auto rounded-3xl hover:rounded-none duration-300 cursor-pointer"
            />
            <div className="my-4 space-y-2">
              <div className="flex  justify-around">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiFillLike />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <AiOutlineComment />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <FaShare />
                    <span className="">25k</span>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/profile"
                    className="flex space-x-2 items-center mr-4"
                  >
                    <GrView />
                    <span className="">25k</span>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                #Hindi song-2023, #Ronbir song, #Song
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

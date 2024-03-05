import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineComment,
  AiFillLock,
  AiFillEye,
} from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { SlPlaylist } from "react-icons/sl";
import { BsFillClockFill, BsFillCameraReelsFill } from "react-icons/bs";
import { FaAngleDoubleRight, FaShare } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";
import video1 from "../../../../video/movie/default1.mp4";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import playlistImage from "../../../../images/playlist/playlist.png";
import playlistImage1 from "../../../../images/playlist/playlist1.jpg";
import playlistImage2 from "../../../../images/playlist/playlist3.jpg";
import playlistImage3 from "../../../../images/playlist/playlist4.jpg";
import playlistImage4 from "../../../../images/playlist/playlist2.PNG";

export default function MoviePlaylistContent() {
  const [playlistMenu, setPlaylistMenu] = useState(false);
  const [playlistMenu1, setPlaylistMenu1] = useState(false);
  const [playlistMenu2, setPlaylistMenu2] = useState(false);
  const [addPlaylist, setAddPlaylist] = useState(false);
  const closePlaylist = () => {
    setPlaylistMenu(!playlistMenu);
    setPlaylistMenu1(false);
    setPlaylistMenu2(false);
  };
  const closePlaylist1 = () => {
    setPlaylistMenu1(!playlistMenu1);
    setPlaylistMenu(false);
    setPlaylistMenu2(false);
  };
  const closePlaylist2 = () => {
    setPlaylistMenu2(!playlistMenu2);
    setPlaylistMenu1(false);
    setPlaylistMenu(false);
  };
  return (
    <>
      <div className="mt-4 text-xl mx-4">
        <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
          <div className="flex space-x-2 ml-6">
            <div className=" flex space-x-2 items-center">
              <span className="uppercase">#Movies</span>
              <FaAngleDoubleRight />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        watchSlidesProgress={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[325px] m-auto bg-white p-4 rounded-md shadow-lg">
            <div className="flex pb-2 justify-between space-x-2">
              <p className="font-semibold text-lg cursor-pointer">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </p>
              <div className="">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-full h-auto rounded-2xl hover:rounded-none cursor-pointer duration-300"
            ></video>
            <div className="mb-4 mt-2 w-full flex justify-between">
              <div className=" ">
                <div className="flex items-baseline  space-x-1">
                  <div className="flex items-center space-x-1">
                    <p>#Category</p>
                    <FaAngleDoubleRight className="text-gray-500" />
                  </div>
                  <p className="w-full">Bollywood</p>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#PlayList</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-32">#No PlayList Found</p>
                  <button className="text-xs underline text-blue-600">
                    Create PlayList
                  </button>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#Tags</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-full">#No Tags Found</p>
                  <button className=" w-20 text-xs underline text-blue-600">
                    Add Tags
                  </button>
                </small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[325px] m-auto bg-white p-4 rounded-md shadow-lg">
            <div className="flex pb-2 justify-between space-x-2">
              <p className="font-semibold text-lg cursor-pointer">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </p>
              <div className="">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-full h-auto rounded-2xl hover:rounded-none cursor-pointer duration-300"
            ></video>
            <div className="mb-4 mt-2 w-full flex justify-between">
              <div className=" ">
                <div className="flex items-baseline  space-x-1">
                  <div className="flex items-center space-x-1">
                    <p>#Category</p>
                    <FaAngleDoubleRight className="text-gray-500" />
                  </div>
                  <p className="w-full">Bollywood</p>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#PlayList</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-32">#No PlayList Found</p>
                  <button className="text-xs underline text-blue-600">
                    Create PlayList
                  </button>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#Tags</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-full">#No Tags Found</p>
                  <button className=" w-20 text-xs underline text-blue-600">
                    Add Tags
                  </button>
                </small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[325px] m-auto bg-white p-4 rounded-md shadow-lg">
            <div className="flex pb-2 justify-between space-x-2">
              <p className="font-semibold text-lg cursor-pointer">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </p>
              <div className="">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-full h-auto rounded-2xl hover:rounded-none cursor-pointer duration-300"
            ></video>
            <div className="mb-4 mt-2 w-full flex justify-between">
              <div className=" ">
                <div className="flex items-baseline  space-x-1">
                  <div className="flex items-center space-x-1">
                    <p>#Category</p>
                    <FaAngleDoubleRight className="text-gray-500" />
                  </div>
                  <p className="w-full">Bollywood</p>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#PlayList</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-32">#No PlayList Found</p>
                  <button className="text-xs underline text-blue-600">
                    Create PlayList
                  </button>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#Tags</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-full">#No Tags Found</p>
                  <button className=" w-20 text-xs underline text-blue-600">
                    Add Tags
                  </button>
                </small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[325px] m-auto bg-white p-4 rounded-md shadow-lg">
            <div className="flex pb-2 justify-between space-x-2">
              <p className="font-semibold text-lg cursor-pointer">
                Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
                Bhosle | Suresh Wadkar | Official Video
              </p>
              <div className="">
                <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
              </div>
            </div>
            <video
              src={video1}
              controls
              className="w-full h-auto rounded-2xl hover:rounded-none cursor-pointer duration-300"
            ></video>
            <div className="mb-4 mt-2 w-full flex justify-between">
              <div className=" ">
                <div className="flex items-baseline  space-x-1">
                  <div className="flex items-center space-x-1">
                    <p>#Category</p>
                    <FaAngleDoubleRight className="text-gray-500" />
                  </div>
                  <p className="w-full">Bollywood</p>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#PlayList</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-32">#No PlayList Found</p>
                  <button className="text-xs underline text-blue-600">
                    Create PlayList
                  </button>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex">
                    <div className="flex items-center space-x-1">
                      <p>#Tags</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                  </div>
                  <p className="w-full">#No Tags Found</p>
                  <button className=" w-20 text-xs underline text-blue-600">
                    Add Tags
                  </button>
                </small>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mt-4  mx-4">
        <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
          <div className="flex space-x-2 ml-6">
            <div className=" flex space-x-2 items-center">
              <span className="uppercase text-xl">#PlayList</span>
              <FaAngleDoubleRight />
            </div>
          </div>
          <div className="">
            <button
              type="button"
              className="bg-blue-600/80 hover:bg-blue-600 text-white px-2 py-[2px] rounded-md "
            >
              Create PlayList
            </button>
          </div>
        </div>
      </div>
      <div className="hidden h-[10vh]  items-center justify-center">
        <div className=" flex space-x-2">
          <span>You do not created any playlist Yet! Get Started to</span>
          <Link to="" className="text-blue-700 underline">
            Create
          </Link>
        </div>
      </div>
      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: -2,
            stretch: 15,
            depth: 140,
            modifier: 2.5,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          scrollbar={true}
          watchSlidesProgress={true}
          modules={[
            Navigation,
            Pagination,
            Keyboard,
            Scrollbar,
            EffectCoverflow,
          ]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 1
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 2
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage1}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 3
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage2}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 4
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage3}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 3
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage2}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 4
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage3}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 3
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage2}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 4
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage3}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white p-4 rounded-md shadow-lg h-[520px]">
              <div className="mb-2 flex justify-between space-x-2">
                <div className="font-semibold text-lg cursor-pointer">
                  The Lorem ipsum dolor sit, amet cectetur adipisicing elit. In
                  odio sunt rerum placeat veniam eummnu 5
                </div>
                <div className="">
                  <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
                </div>
              </div>
              <img
                src={playlistImage4}
                alt="playlistImage"
                className="h-72 w-auto"
              />
              <div className="mb-4 mt-2 w-full flex flex-col">
                <div className="flex items-baseline justify-between space-x-1">
                  <div className="flex ">
                    <div className="flex items-center space-x-1">
                      <SlPlaylist />
                      <p>Category</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="w-full">Bollywood</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Change Image
                  </button>
                </div>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <BsFillCameraReelsFill />
                      <p>Movies</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">25 Videos</p>
                  </div>
                  <button className=" text-xs underline text-blue-600">
                    Add Movie
                  </button>
                </small>
                <small className="flex">
                  <div className="flex space-x-1">
                    <div className="flex items-center space-x-1">
                      <AiFillEye />
                      <p>Views</p>
                      <FaAngleDoubleRight className="text-gray-500" />
                    </div>
                    <p className="">32k</p>
                  </div>
                </small>
                <small className="flex items-baseline space-x-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <AiFillLock className="text-gray-500" />
                      <p>Private</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BsFillClockFill className="text-gray-500" />
                      <p>28-May-2023</p>
                    </div>
                  </div>

                  <button className="  text-xs underline text-blue-600">
                    Change Privacy
                  </button>
                </small>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="mt-4 text-xl mx-4">
        <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
          <div className="flex space-x-2 ml-6">
            <div className=" flex space-x-2 items-center">
              <span className="uppercase">#Playlist</span>
              <FaAngleDoubleRight />
            </div>
            <div
              className="flex space-x-2 items-center"
              onClick={closePlaylist}
            >
              <span className="uppercase underline cursor-pointer text-sm">
                Hollywood
              </span>
              <FaAngleDoubleRight
                className={` ${playlistMenu ? "rotate-90" : ""} duration-300`}
              />
            </div>
            <div
              className="flex space-x-2 items-center"
              onClick={closePlaylist1}
            >
              <span className="uppercase underline cursor-pointer text-sm">
                Bollywood
              </span>
              <FaAngleDoubleRight
                className={` ${playlistMenu1 ? "rotate-90" : ""} duration-300`}
              />
            </div>
            <div
              className="flex space-x-2 items-center"
              onClick={closePlaylist2}
            >
              <span className="uppercase underline cursor-pointer text-sm">
                Kollywood
              </span>
              <FaAngleDoubleRight
                className={` ${playlistMenu2 ? "rotate-90" : ""} duration-300`}
              />
            </div>
          </div>

          <div
            className={`flex items-center space-x-2 relative top-1  mb-2 mr-6`}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Create Playlist"
              className="pl-2 placeholder:text-base rounded-md outline-none"
            />
            <AiOutlinePlusCircle className="cursor-pointer" />
          </div>
        </div>
        <div className="flex text-sm">
          <div className=" relative top-1   ">
            <div
              className={`${
                playlistMenu ? "flex" : "hidden"
              }    duration-500 bg-gray-200 px-4 py-2 gap-2 items-center`}
            >
              <div className="flex gap-2">
                <div className=" bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                  Hollywood
                </div>
                <div className=" bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                  Classic
                </div>
                <div className="bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                  Science Fiction
                </div>
                <div className="bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                  Music
                </div>
              </div>

              <div
                className={`flex items-center space-x-2 relative top-1  mb-2 `}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Create Sub-Playlist"
                  className="pl-2 placeholder:text-xs rounded-md outline-none"
                />
                <AiOutlinePlusCircle className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" relative top-1  ">
            <div
              className={`${
                playlistMenu1 ? "flex" : "hidden"
              }    duration-500  bg-gray-200 px-4 py-2 gap-2 items-center`}
            >
              <div className=" bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Bollywood
              </div>
              <div className=" bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Classic
              </div>
              <div className="bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Science Fiction
              </div>
              <div className="bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Music
              </div>
              <div
                className={`flex items-center space-x-2 relative top-1  mb-2 `}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Create Sub-Playlist"
                  className="pl-2 placeholder:text-xs rounded-md outline-none"
                />
                <AiOutlinePlusCircle className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" relative top-1  ">
            <div
              className={`${
                playlistMenu2 ? "flex" : "hidden"
              }    duration-500  bg-gray-200 px-4 py-2 gap-2 items-center`}
            >
              <div className=" bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Kollywood
              </div>
              <div className=" bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Classic
              </div>
              <div className="bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Science Fiction
              </div>
              <div className="bg-white text-center rounded-md shadow-lg px-2 hover:bg-blue-700/80 hover:text-white cursor-pointer">
                Music
              </div>
              <div
                className={`flex items-center space-x-2 relative top-1  mb-2`}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Create Sub-Playlist"
                  className="pl-2 placeholder:text-xs rounded-md outline-none"
                />
                <AiOutlinePlusCircle className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xl mx-4">
        <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
          <div className="flex space-x-2 ml-6">
            <div className=" flex space-x-2 items-center">
              <span className="uppercase">#Hollywood</span>
              <FaAngleDoubleRight />
            </div>
            <div
              className="flex space-x-2 items-center"
              onClick={closePlaylist}
            >
              <span className="uppercase cursor-pointer text-sm">
                Science Friction
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 my-6 grid grid-flow-row grid-cols-3 gap-7">
        <div className=" border-b-8 pb-6">
          <video
            src={video1}
            controls
            className="w-[450px] h-auto rounded-3xl hover:rounded-none cursor-pointer"
          ></video>
          <div className="my-4 flex justify-between">
            <div className="font-semibold text-lg cursor-pointer">
              Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
              Bhosle | Suresh Wadkar | Official Video
            </div>
            <div className="pl-2">
              <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
            </div>
          </div>
        </div>
        <div className=" border-b-8 pb-6">
          <video
            src={video1}
            controls
            className="w-[450px] h-auto rounded-3xl hover:rounded-none cursor-pointer"
          ></video>
          <div className="my-4 flex justify-between">
            <div className="font-semibold text-lg cursor-pointer">
              Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
              Bhosle | Suresh Wadkar | Official Video
            </div>
            <div className="pl-2">
              <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
            </div>
          </div>
        </div>
        <div className=" border-b-8 pb-6">
          <video
            src={video1}
            controls
            className="w-[450px] h-auto rounded-3xl hover:rounded-none cursor-pointer"
          ></video>
          <div className="my-4 flex justify-between">
            <div className="font-semibold text-lg cursor-pointer">
              Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
              Bhosle | Suresh Wadkar | Official Video
            </div>
            <div className="pl-2">
              <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xl mx-4">
        <div className="bg-gray-200 flex justify-between items-center gap-2 p-2 ">
          <div className="flex space-x-2 ml-6">
            <div className=" flex space-x-2 items-center">
              <span className="uppercase">#Hollywood</span>
              <FaAngleDoubleRight />
            </div>
            <div
              className="flex space-x-2 items-center"
              onClick={closePlaylist}
            >
              <span className="uppercase cursor-pointer text-sm">Music</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 my-6 grid grid-flow-row grid-cols-3 gap-7">
        <div className=" border-b-8 pb-6">
          <video
            src={video1}
            controls
            className="w-[450px] h-auto rounded-3xl hover:rounded-none cursor-pointer"
          ></video>
          <div className="my-4 flex justify-between">
            <div className="font-semibold text-lg cursor-pointer">
              Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
              Bhosle | Suresh Wadkar | Official Video
            </div>
            <div className="pl-2">
              <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
            </div>
          </div>
        </div>
        <div className=" border-b-8 pb-6">
          <video
            src={video1}
            controls
            className="w-[450px] h-auto rounded-3xl hover:rounded-none cursor-pointer"
          ></video>
          <div className="my-4 flex justify-between">
            <div className="font-semibold text-lg cursor-pointer">
              Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
              Bhosle | Suresh Wadkar | Official Video
            </div>
            <div className="pl-2">
              <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
            </div>
          </div>
        </div>
        <div className=" border-b-8 pb-6">
          <video
            src={video1}
            controls
            className="w-[450px] h-auto rounded-3xl hover:rounded-none cursor-pointer"
          ></video>
          <div className="my-4 flex justify-between">
            <div className="font-semibold text-lg cursor-pointer">
              Aur Iss Dil Mein - Lyrical | SANAM Band | और इस दिल में | Asha
              Bhosle | Suresh Wadkar | Official Video
            </div>
            <div className="pl-2">
              <BiDotsHorizontal className="p-1 rounded-full cursor-pointer text-3xl text-blue-700 bg-gray-200" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

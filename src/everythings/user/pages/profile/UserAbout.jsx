import React from "react";
import ProfileBar from "../../components/profile/layouts/ProfileBar";
import { Link } from "react-router-dom";
import logo1 from "../../../../images/services/default1.jpg";
import logo2 from "../../../../images/services/default2.jpg";
import logo3 from "../../../../images/services/default3.jpg";
import logo4 from "../../../../images/services/default4.jpg";
import logo5 from "../../../../images/services/default5.jpg";
import logo6 from "../../../../images/services/default6.jpg";
import profile1 from "../../../../images/portfolio/team-1.jpg";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
export default function UserAbout() {
  return (
    <>
      <ProfileBar />
      <div className="bg-slate-100  py-5">
        <div className="mx-10">
          <div className="text-center p-10 font-semibold">
            <h2>Hey, I'm Walter White</h2>
            <h5>Full Stack Web Developer</h5>
            <p>From Bangladesh</p>
          </div>
          <div className=" flex gap-2">
            <div className=" bg-white rounded-lg shadow  py-2 col-span-1">
              <img
                src={profile1}
                className="p-1 transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300 rounded-lg"
                alt="profile"
              />
              <div className="flex justify-center space-x-4 py-3 text-xl">
                <a href="/" target="_twitter " className="text-cyan-500">
                  <FaTwitter />
                </a>
                <a href="/" target="_facebook" className="text-blue-500">
                  <BsFacebook />
                </a>
                <a href="/" target="_instagram" className="text-red-500">
                  <BsInstagram />
                </a>
                <a href="/" target="_linkedin" className="text-[#0077b5]">
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow  py-2  p-2 flex justify-center ">
              <div className=" p-2 flex flex-col justify-center items-center">
                <h1>About me</h1>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-5 bg-white rounded-lg shadow  py-4">
            My Services
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow  py-2 ">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo1}
                      className="h-24 w-24 rounded-full  animate-bounce "
                      alt="logo1"
                    />
                  </div>
                  <h4>Lorem Ipsum</h4>
                </Link>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo2}
                      className="h-24 w-24 rounded-full animate-pulse"
                      alt="logo2"
                    />
                  </div>
                  <h4>Sed Perspiciatis</h4>
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5 ">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo3}
                      className="h-24 w-24 rounded-full animate-spin"
                      alt="logo3"
                    />
                  </div>
                  <h4>Magni Dolores</h4>
                </Link>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2 ">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo4}
                      className="h-24 w-24 rounded-full animate-spin"
                      alt="logo4"
                    />
                  </div>
                  <h4>Nemo Enim</h4>
                </Link>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo5}
                      className="h-24 w-24 rounded-full animate-pulse"
                      alt="logo5"
                    />
                  </div>
                  <h4>Dele Cardo</h4>
                </Link>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo6}
                      className="h-24 w-24 rounded-full animate-bounce"
                      alt="logo6"
                    />
                  </div>
                  <h4>Divera Don</h4>
                </Link>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-5 bg-white rounded-lg shadow  py-4">
            My Works
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow  py-2 ">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo1}
                      className="h-24 w-24 rounded-full  animate-bounce "
                      alt="logo1"
                    />
                  </div>
                  <h4>Lorem Ipsum</h4>
                </Link>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo2}
                      className="h-24 w-24 rounded-full animate-pulse"
                      alt="logo2"
                    />
                  </div>
                  <h4>Sed Perspiciatis</h4>
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5 ">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo3}
                      className="h-24 w-24 rounded-full animate-spin"
                      alt="logo3"
                    />
                  </div>
                  <h4>Magni Dolores</h4>
                </Link>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2 ">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo4}
                      className="h-24 w-24 rounded-full animate-spin"
                      alt="logo4"
                    />
                  </div>
                  <h4>Nemo Enim</h4>
                </Link>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo5}
                      className="h-24 w-24 rounded-full animate-pulse"
                      alt="logo5"
                    />
                  </div>
                  <h4>Dele Cardo</h4>
                </Link>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow  py-2">
              <div className="text-center px-2 py-5">
                <Link
                  to="/"
                  className="no-underline hover:underline text-black"
                >
                  <div className="flex items-center justify-center py-2">
                    <img
                      src={logo6}
                      className="h-24 w-24 rounded-full animate-bounce"
                      alt="logo6"
                    />
                  </div>
                  <h4>Divera Don</h4>
                </Link>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
            <div className="flex flex-col justify-center gap-4">
              <span className="text-xl text-center">Contact Me</span>
              <div className="flex justify-center space-x-4 text-xl">
                <a href="/" target="_twitter " className="text-cyan-500">
                  <FaTwitter />
                </a>
                <a href="/" target="_facebook" className="text-blue-500">
                  <BsFacebook />
                </a>
                <a href="/" target="_instagram" className="text-red-500">
                  <BsInstagram />
                </a>
                <a href="/" target="_linkedin" className="text-[#0077b5]">
                  <BsLinkedin />
                </a>
              </div>
              <div className="bg-white rounded-lg shadow  p-2 flex flex-col gap-2">
                <div className="flex space-x-2">
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className="flex space-x-2">
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
                <div className="flex space-x-2">
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className=" p-3 bg-gray-300 space-y-2 rounded-md">
              <div className="grid grid-rows-2">
                <label htmlFor="Name" className="pb-2 font-bold">
                  Your Name: <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  className="rounded-md outline-none h-6"
                  placeholder=" Enter Your Name"
                />
              </div>
              <div className="grid grid-rows-2">
                <label htmlFor="Email" className="pb-2 font-bold">
                  Your Email: <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name=""
                  className="rounded-md outline-none h-6"
                  placeholder=" Enter Your Email Address"
                />
              </div>
              <div className="grid grid-rows-2">
                <label htmlFor="Number" className="pb-2 font-bold">
                  Phone: <span className="text-red-600">*</span>
                </label>
                <input
                  type="phone"
                  name=""
                  className="rounded-md outline-none h-6"
                  placeholder=" Enter Your Phone Number"
                />
              </div>
              <div className="grid grid-rows-2">
                <label htmlFor="Message" className="font-bold">
                  Message: <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  className="rounded-md outline-none"
                  placeholder=" Write Your Message"
                ></textarea>
              </div>
              <div className="text-center p-1">
                <Link className="no-underline py-4 text-sm md:text-xs" to="/">
                  <button className="p-1 mr-2 lg:text-base xl:text-md 2xl:text-3xl  bg-blue-500 hover:bg-blue-600  hover:text-slate-400 text-slate-50 rounded-lg">
                    Send Message
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

import React from "react";
import team1 from "../../images/team/team-1.jpg";
import team2 from "../../images/team/team-2.jpg";
import team3 from "../../images/team/team-3.jpg";
import team4 from "../../images/team/team-4.jpg";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Team() {
  return (
    <>
      <div className="bg-slate-100  py-5 mt-40 md:mt-16">
        <div className="px-10">
          <div className="text-center py-5">
            <h1>Team</h1>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="grid justify-center items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            <div className="bg-white rounded-lg shadow shadow-black py-2 ">
              <div className="p-1 border-b-2">
                <img
                  src={team1}
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                  alt="team1"
                />
              </div>
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
              <div className="text-center py-3 bg-gray-100">
                <Link to="" className="no-underline text-black hover:underline">
                  <h4>Walter White</h4>
                </Link>
                <span>Chief Executive Officer</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow shadow-black py-2">
              <div className="p-1 border-b-2">
                <img
                  src={team2}
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                  alt="team2"
                />
              </div>
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
              <div className="text-center py-3 bg-gray-100">
                <Link
                  to="/"
                  className="no-underline text-black hover:underline"
                >
                  <h4>Sarah Jhonson</h4>
                </Link>
                <span>Product Manager</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow shadow-black py-2">
              <div className="p-1 border-b-2">
                <img
                  src={team3}
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                  alt="team3"
                />
              </div>
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
              <div className="text-center py-3 bg-gray-100">
                <Link
                  to="/"
                  className="no-underline text-black hover:underline"
                >
                  <h4>William Anderson</h4>
                </Link>
                <span>CTO</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow shadow-black py-2">
              <div className="p-1 border-b-2">
                <img
                  src={team4}
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                  alt="team4"
                />
              </div>
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
              <div className="text-center py-3 bg-gray-100">
                <Link to="" className="no-underline text-black hover:underline">
                  <h4>Amanda Jepson</h4>
                </Link>
                <span>Accountant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="bg-slate-100  py-5 mt-40 md:mt-16">
      <div className="mx-10">
        <div className="text-center p-5">
          <h1 className="py-2">Contact Us</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="py-2">
          <iframe
            title="map"
            style={{ border: `0`, width: `100%`, height: `270px` }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-2 mt-5">
          <div className="py-3 md:col-span-1 lg:col-span-1">
            <div className="flex space-x-2 align-baseline bg">
              <div className="text-red-500 hover:text-yellow-500 mt-1">
                <HiOutlineLocationMarker />
              </div>
              <div className="">
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="flex space-x-2 align-top bg">
              <div className="text-blue-500 hover:text-amber-900 mt-1 ">
                <AiOutlineMail className="" />
              </div>
              <div className="">
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="flex space-x-2 align-baseline bg">
              <div className=" text-pink-500 hover:text-green-500 mt-1">
                <FaMobileAlt />
              </div>
              <div className="">
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>

          <div className=" p-3 bg-gray-300 space-y-2 rounded-md md:col-span-2 lg:col-span-1">
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
              <Link className="no-underline py-4 text-sm md:text-xs" to="">
                <button className="p-1 mr-2 lg:text-base xl:text-md 2xl:text-3xl  bg-blue-500 hover:bg-blue-600  hover:text-slate-400 text-slate-50 rounded-lg">
                  Send Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

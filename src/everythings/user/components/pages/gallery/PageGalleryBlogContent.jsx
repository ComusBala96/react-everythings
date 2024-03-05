import React from "react";
import profile1 from "../../../../../images/user/profile/profile-1.jpg";
import profile2 from "../../../../../images/user/profile/profile-2.jpg";
import profile3 from "../../../../../images/user/profile/profile-3.jpg";
import profile4 from "../../../../../images/user/profile/profile-4.jpg";
import cover2 from "../../../../../images/user/cover/cover-2.jpg";
import cover3 from "../../../../../images/user/cover/cover-3.jpg";
export default function PageGalleryBlogContent() {
  return (
    <>
      <div className="col-span-7 bg-white shadow-md">
        <div className="m-4 gap-4 flex">
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile1}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile2}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile3}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile4}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
        </div>
        <div className="m-4 gap-4 flex">
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-96">
            <div className="p-1">
              <img
                src={cover2}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-96">
            <div className="p-1">
              <img
                src={cover2}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-96">
            <div className="p-1">
              <img
                src={cover3}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
        </div>
        <div className="m-4 gap-4 flex">
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile1}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile2}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile3}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow shadow-black p-2 w-40">
            <div className="p-1">
              <img
                src={profile4}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300"
                alt="profile1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

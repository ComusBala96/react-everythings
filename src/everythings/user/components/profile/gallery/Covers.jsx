import React from "react";

import cover2 from "../../../../../images/user/cover/cover-2.jpg";
import cover3 from "../../../../../images/user/cover/cover-3.jpg";

export default function Covers() {

  return (
    <>
      <div className="col-span-7 bg-white shadow-md">
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
      </div>
    </>
  );
}

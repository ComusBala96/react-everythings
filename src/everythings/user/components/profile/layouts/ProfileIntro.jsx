import React from 'react'
import { NavLink } from "react-router-dom";
export default function ProfileIntro() {
  return (
    <>
      <div className="col-span-5 h-96 bg-white shadow-md pb-4 sticky top-32">
        <div className="mx-4 text-lg py-2">Intro</div>
        <hr />
        <div className="flex justify-center py-4">
          <NavLink
            to="/user/bio"
            className="py-1 px-2 bg-blue-400 rounded-md text-white"
          >
            Edit Bio
          </NavLink>
        </div>
        <div className="flex flex-col mx-4 gap-3">
          <span>Name: Comus Bala</span>
          <span>Nick Name: Orian </span>
          <span>Profetion: Web Developer</span>
        </div>
      </div>
    </>
  );
}

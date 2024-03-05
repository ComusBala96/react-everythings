import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="bg-gray-200 p-2">
        <div className="flex flex-col m-2 p-2 md:flex-row md:ring-2 justify-around rounded-md">
          <div className="flex justify-center items-center flex-col my-2 ring-2 p-1 md:ring-0 rounded-md">
            <h4 className="pt-1">OrianSoft</h4>
            <span className="text-center">
              H-467, Bagam Uttor Para, Kotalipara, Gopalgonj-8110
            </span>
          </div>
          <div className="justify-center items-center flex flex-col mb-2">
            <h4>Useful Links</h4>
            <div className="flex flex-row space-x-10 p-2">
              <div className="flex flex-col text-center">
                <Link className="" to="/">
                  Home
                </Link>

                <Link className="" to="/">
                  Services
                </Link>

                <Link className="" to="/">
                  Portfolio
                </Link>

                <Link className="" to="/">
                  Team
                </Link>
              </div>
              <div className="flex flex-col text-center">
                <Link className="" to="/">
                  Pricing
                </Link>

                <Link className="" to="/">
                  About
                </Link>

                <Link className="" to="/">
                  Contact
                </Link>

                <Link className="" to="/">
                  Call
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col">
            <h4>Our Services</h4>

            <Link className="" to="/">
              Web Design
            </Link>

            <Link className="" to="/">
              Web Development
            </Link>

            <Link className="" to="/">
              Product Management
            </Link>

            <Link className="" to="/">
              Marketing
            </Link>

            <Link className="" to="/">
              Graphic Design
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-center py-1">
        <span className="font-semibold">
          Copyright © 2022-2030 OrianSoft.com. All rights reserved
        </span>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/services/default1.jpg";
import logo2 from "../../images/services/default2.jpg";
import logo3 from "../../images/services/default3.jpg";
import logo4 from "../../images/services/default4.jpg";
import logo5 from "../../images/services/default5.jpg";
import logo6 from "../../images/services/default6.jpg";
export default function Services() {
  return (
    <>
      <div className="bg-slate-100  pt-5 mt-40 md:mt-16">
        <div className="mx-10 ">
          <div className="text-center py-5">
            <h1>Services</h1>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className=" flex flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 ">
            <div className="bg-white rounded-lg shadow shadow-black py-2">
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

            <div className=" bg-white rounded-lg shadow shadow-black py-2">
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

            <div className=" bg-white rounded-lg shadow shadow-black py-2">
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

            <div className=" bg-white rounded-lg shadow shadow-black py-2 ">
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

            <div className=" bg-white rounded-lg shadow shadow-black py-2">
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

            <div className=" bg-white rounded-lg shadow shadow-black py-2">
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
        </div>
      </div>
    </>
  );
}

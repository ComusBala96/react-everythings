import React from "react";

export default function About() {
  return (
    <div className="bg-slate-100  py-5 mt-40 md:mt-16">
      <div className="mx-10 bg-white px-5 flex flex-col bg-no-repeat bg-cover justify-center items-center h-[41rem] md:h-[30rem]">
        <div className="text-center p-5">
          <h2>About Us</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <a href="/" className="">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

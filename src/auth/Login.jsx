import React from "react";

export default function Login() {
  return (
    <>
      <div className="bg-slate-100  pt-4 mt-28 md:mt-10">
      <div className="flex justify-center items-center h-[92vh] bg-login_register">
        <div className="ring-2 ring-gray-100 rounded-md bg-gray-50 pb-4 w-[700px] shadow mx-1">
          <div className="pt-3 ml-6">
            <span className="text-lg">Login</span>
          </div>
          <hr className="mb-5 mt-3" />
          <div className="ml-2  grid grid-rows-3 gap-3">
            <div className="grid grid-cols-3 space-x-1">
              <label htmlFor="email" className="col-span-1 md:ml-4">
                Email Address
              </label>
              <div className="">
                <input
                  type="email"
                  id="email"
                  className="col-span-2 ring-1 ring-gray-300 rounded-md outline-none h-8  md:w-96"
                  name="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-1">
              <label htmlFor="password" className="col-span-1 md:ml-4">
                Password
              </label>
              <div className="">
                <input
                  type="password"
                  id="password"
                  className="col-span-2 ring-1 ring-gray-300 rounded-md outline-none h-8  md:w-96"
                  name="password"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-1">
              <div className="col-span-1"></div>
              <div className="col-span-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                  name="remember"
                />
                <label className="" htmlFor="remember">
                  Remember Me
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-2">
            <div className="text-center">
              <a className="no-underline" href="/forget">
                Forgot Your Password?
              </a>
            </div>
            <div className="grid grid-cols-2 text-center gap-4 mt-3">
              <div className="text-right ">
                <a
                  className="no-underline ring-1 ring-gray-300 rounded-md p-1 px-2 text-white bg-blue-600 hover:bg-blue-400"
                  href="/register"
                >
                  Register
                </a>
              </div>
              <div className="text-left">
                <a
                  href="/login"
                  className="no-underline ring-1 ring-gray-300 rounded-md p-1 px-2 text-white bg-blue-600 hover:bg-blue-400"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

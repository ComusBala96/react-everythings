import React from "react";

export default function UserContact() {
  return (
    <>
      <div className=" bg-gray-50 md:p-4 xl:px-40 rounded-md h-contactHeightUser overflow-y-auto">
        <div className="shadow bg-white grid gap-4 border rounded-md ">
          <div className="text-center md:text-lg py-4 border-b">
            <span htmlFor="query">You can simple text us for your query?</span>
          </div>
          <div className="p-4 grid grid-flow-row gap-8  md:w-[60vw] xl:w-[55vw] md:mx-auto text-sm md:text-base">
            <div className="grid grid-flow-col grid-cols-10 space-x-8 justify-center">
              <label
                htmlFor="name"
                className="col-span-2 font-medium flex space-x-2"
              >
                <span>Name:</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="col-span-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-[100%] h-8 border rounded-md focus:outline-none p-1"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-10 space-x-8">
              <label
                htmlFor="name"
                className="col-span-2 font-medium flex space-x-2"
              >
                <span>Email:</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="col-span-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[100%]  h-8 border rounded-md focus:outline-none p-1"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-10 space-x-8">
              <label
                htmlFor="name"
                className="col-span-2 font-medium flex space-x-2"
              >
                <span>Phone:</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="col-span-8">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="w-[100%]  h-8 border rounded-md focus:outline-none p-1"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-10 space-x-8">
              <label
                htmlFor="name"
                className="col-span-2 font-medium flex space-x-2"
              >
                <span>Message:</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="col-span-8">
                <textarea
                  className="h-20 md:h-32 w-[100%] border rounded-md  focus:outline-none p-1"
                  id="user_message"
                  name="message"
                  placeholder="Type your message . . . ."
                ></textarea>
              </div>
            </div>
            <div className="grid grid-flow-col gap-6 justify-end ">
              <button
                type="submit"
                className="bg-blue-500 rounded-lg px-3 py-1 text-white "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 rounded-lg px-3 py-1 text-white "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

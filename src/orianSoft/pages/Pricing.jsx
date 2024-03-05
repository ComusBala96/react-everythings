import React from "react";

export default function Pricing() {
  return (
    <div className="bg-slate-100  py-5 mt-40 md:mt-16 w-screen ">
      <div className="mx-2 justify-center items-center flex flex-col">
        <div className="text-center p-3">
          <h1>Price List</h1>
        </div>
        <div className="bg-white rounded-lg shadow shadow-black py-2 ">
          <table className="table-auto">
            <thead className="text-center border">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Features</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border">
                <td>01</td>
                <td>Web Design</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore tenetur explicabo
                </td>
                <td>
                  <li className="list-none	">1. Lorem ipsum dolor sit</li>
                  <li className="list-none	">2. Lorem ipsum dolor sit</li>
                  <li className="list-none	">3. Lorem ipsum dolor sit</li>
                </td>
                <td>10000Rs</td>
              </tr>
              <tr className="border">
                <td>02</td>
                <td>Web Development</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore tenetur explicabo
                </td>
                <td>
                  <li className="list-none	">1. Lorem ipsum dolor sit</li>
                  <li className="list-none	">2. Lorem ipsum dolor sit</li>
                  <li className="list-none	">3. Lorem ipsum dolor sit</li>
                </td>
                <td>100000Rs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function OrianSoft() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

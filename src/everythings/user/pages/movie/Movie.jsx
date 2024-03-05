import React from "react";
import MovieBar from "../../components/movie/layouts/MovieBar";
import { Outlet } from "react-router-dom";

export default function Movie() {
  return (
    <>
      <MovieBar />
      <Outlet />
    </>
  );
}

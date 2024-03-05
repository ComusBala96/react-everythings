import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Modebar from "./components/Modebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notify from "./components/Notify";
import { Outlet } from "react-router-dom";
import Log from "./components/Log";

export default function User() {
  const [sidebarMenu, setSidebarMenu] = useState(true);
  const [mode, setMode] = useState(true);
  const [log, setLog] = useState(true);
  const [screen, setScreen] = useState(false);
  const [notification, setNotification] = useState(false);
  const closeNotification = () => {
    setNotification(false);
  };
  const fullScreenMode = () => {
    let myScreen = document.documentElement;
    if (screen === false) {
      if (
        myScreen.requestFullscreen ||
        myScreen.msRequestFullscreen ||
        myScreen.mozRequestFullscreen ||
        myScreen.webkitRequestFullscreen
      ) {
        return (
          myScreen.requestFullscreen() ||
          myScreen.msRequestFullscreen() ||
          myScreen.mozRequestFullscreen() ||
          myScreen.webkitRequestFullscreen()
        );
      }
    } else {
      if (screen === true) {
        if (
          document.exitFullscreen ||
          document.msexitFullscreen ||
          document.mozexitFullscreen ||
          document.webkitexitFullscreen
        ) {
          return (
            document.exitFullscreen() ||
            document.msexitFullscreen() ||
            document.mozexitFullscreen() ||
            document.webkitexitFullscreen()
          );
        }
      }
    }
  };
  const fullScreen = () => {
    fullScreenMode();
    setScreen(!screen);
  };
  return (
    <>
      <div className="">
        <Sidebar sidebarMenu={sidebarMenu} />
        <Modebar mode={mode} />
        <Notify notification={notification} setNotification={setNotification} />
        <Log log={log} closeNotification={closeNotification} />
        <Navbar
          sidebarMenu={sidebarMenu}
          setSidebarMenu={setSidebarMenu}
          mode={mode}
          setMode={setMode}
          log={log}
          setLog={setLog}
          fullScreen={fullScreen}
          notification={notification}
          setNotification={setNotification}
          closeNotification={closeNotification}
        />
        <div className="mt-16 px-2 pb-2 scroll-pt-16 bg-gray-100">
          <div
            className={`relative ${
              sidebarMenu
                ? "md:w-[70%] md:left-[30%] lg:w-[75%] lg:left-[25%] xl:w-[82%]  xl:left-[18%] duration-300"
                : "md:w-[90%] md:left-[10%] lg:w-[92%] lg:left-[8%] xl:w-[94%]  xl:left-[6%] duration-300"
            }  lg:-right-[25%] lg:w-[75%] xl:w-[80%] xl:-right-[20%] pt-2`}
          >
            <Outlet context={[sidebarMenu]} />
          </div>
        </div>
        <Footer sidebarMenu={sidebarMenu} />
      </div>
    </>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        OrianSoft: "rgb(29, 175, 175, 1)",
        login_register: "rgb(127, 252, 210)",
        sticky_navbar: "rgb(57, 121, 121, .9)",
      },
      height: {
        sideBarScroll: "calc(100vh - 260px)",
        contactHeightHome: "calc(100vh - 135px)",
        contactHeightUser: "calc(100vh - 137px)",
        messageHeight: "calc(100vh - 211px)",
        messageHightSM: "calc(100vh - 229px)",
        messageBoxHeight: "calc(100vh - 260px)",
        notificationHeight: "calc(100vh - 128px)",
        notificationPageBoxHeight: "calc(100vh - 121px)",
        settingsBoxHeight: "calc(100vh - 240px)",
        postSidebarHeight: "calc(100vh - 140px)",
      },
      width: {
        messageWidth: "calc(100vw - 18px)",
        notificationPageWidth: "calc(100vw - 538px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

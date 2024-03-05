import React from "react";
import Post from "../../components/Post";
import ProfileHeader from "../../components/profile/layouts/ProfileHeader";
import ProfileBar from "../../components/profile/layouts/ProfileBar";
import ProfileIntro from "../../components/profile/layouts/ProfileIntro";

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <ProfileBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <ProfileIntro />
          <div className="col-span-7 bg-white shadow-md">
            <div className="mx-4 py-4 h-full flex flex-col justify-center items-center gap-4">
              {/* <span>Notihing Posted Yet!</span>
                <Link to="/user/post" className="underline font-semibold">
                  Create First Post
                </Link> */}
              <Post />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

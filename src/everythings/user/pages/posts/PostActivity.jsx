import React from "react";
import PostBar from "../../components/posts/layouts/PostBar";
import ActivityLog from "../../components/profile/activity/ActivityLog";

export default function PostActivity() {
  return (
    <>
      <PostBar />
      <div className="flex  justify-center mt-4">
        <div className="w-1/2 bg-white rounded-md py-2 px-10">
          <ActivityLog />
        </div>
      </div>
    </>
  );
}

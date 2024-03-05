import React from "react";
import ProfileBar from "../../components/profile/layouts/ProfileBar";
import ActivityLog from "../../components/profile/activity/ActivityLog";

export default function Activity() {
  return (
    <>
      <ProfileBar />
      <div className="flex  justify-center mt-4">
        <div className="w-1/2 bg-white rounded-md py-2 px-10">
          <ActivityLog />
        </div>
      </div>
    </>
  );
}

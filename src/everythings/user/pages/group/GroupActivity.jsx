import React from "react";
import GroupBar from "../../components/groups/layouts/GroupBar";
import ActivityLog from "../../components/profile/activity/ActivityLog";

export default function GroupActivity() {
  return (
    <>
      <GroupBar />
      <div className="flex  justify-center mt-4">
        <div className="w-1/2 bg-white rounded-md py-2 px-10">
          <ActivityLog />
        </div>
      </div>
    </>
  );
}

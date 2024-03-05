import React from "react";
import PageBar from "../../components/pages/layouts/PageBar";
import ActivityLog from "../../components/profile/activity/ActivityLog";

export default function PageActivity() {
  return (
    <>
      <PageBar />
      <div className="flex  justify-center mt-4">
        <div className="w-1/2 bg-white rounded-md py-2 px-10">
          <ActivityLog />
        </div>
      </div>
    </>
  );
}

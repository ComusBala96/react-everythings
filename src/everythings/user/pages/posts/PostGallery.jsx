import React, { useState } from "react";
import CommonHeader from "../../components/profile/layouts/CommonHeader";
import PostBar from "../../components/posts/layouts/PostBar";
import PostSidebar from "../../components/posts/layouts/PostSidebar";
import { Outlet } from "react-router-dom";
import PostGallerySidebar from "../../components/posts/gallery/layouts/PostGallerySidebar";
export default function PostGallery() {
  const [events, setEvents] = useState(false);
  const [liveEvents, setLiveEvents] = useState(false);
  const [expiredEvents, setExpiredEvents] = useState(false);
  const [meetings, setMeetings] = useState(false);
  const [liveMeetings, setLiveMeetings] = useState(false);
  const [expiredMeetings, setExpiredMeetings] = useState(false);
  const [lives, setLives] = useState(false);
  const [goLive, setGoLive] = useState(false);
  const [createLiveEvent, setCreateLiveEvent] = useState(false);
  return (
    <>
      <CommonHeader />
      <PostBar />
      <div className="mt-4 mx-10 ">
        <div className="grid grid-flow-col grid-cols-12 gap-4 ">
          <PostGallerySidebar
            events={events}
            setEvents={setEvents}
            liveEvents={liveEvents}
            setLiveEvents={setLiveEvents}
            expiredEvents={expiredEvents}
            setExpiredEvents={setExpiredEvents}
            meetings={meetings}
            setMeetings={setMeetings}
            liveMeetings={liveMeetings}
            setLiveMeetings={setLiveMeetings}
            expiredMeetings={expiredMeetings}
            setExpiredMeetings={setExpiredMeetings}
            lives={lives}
            setLives={setLives}
            goLive={goLive}
            setGoLive={setGoLive}
            createLiveEvent={createLiveEvent}
            setCreateLiveEvent={setCreateLiveEvent}
          />
          <Outlet />
        </div>
      </div>
    </>
  );
}

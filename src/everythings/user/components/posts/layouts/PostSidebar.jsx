import React, { useState } from "react";
import Post from "./postSidebarComponents/Post";
import Blog from "./postSidebarComponents/Blog";
import Article from "./postSidebarComponents/Article";
import News from "./postSidebarComponents/News";
import Event from "./postSidebarComponents/Event";
import PostNavbar from "./PostNavbar";
export default function PostSidebar() {
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
      <div className="col-span-5  space-y-2 pb-4 sticky top-32 h-postSidebarHeight">
        <div className="overflow-auto top-36 h-postSidebarHeight  scrollbar-thin scrollbar-track-cyan-300 scrollbar-thumb-gray-200 ">
          <Post />
          <Blog />
          <Article />
          <News />
          <Event />
          <PostNavbar
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
        </div>
      </div>
    </>
  );
}

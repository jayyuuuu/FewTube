import React from "react";

const Sidebar = () => {
  return (
    <div className=" p-5 border-r-2 font-medium w-60 ">
      <ul className="space-y-2 border-b pb-4">
        <h1 className="font-bold text-xl">Home</h1>
        <h1>Shorts</h1>
        <h1>Subscription</h1>
        <h1>YouTube Music</h1>
      </ul>
      <ul className="space-y-2 border-b py-4">
        <h1 className="font-bold pt-2 text-xl ">You</h1>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Downloads</li>
        <li>Liked Videos</li>
        <li>Your clips</li>
      </ul>
      <ul className="space-y-2 border-b py-4">
        <h1 className="font-bold pt-2 text-xl">Explore</h1>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies & Shows</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>
      <ul className="space-y-2 border-b py-4">
        <h1 className="font-bold pt-2 text-xl">More from YouTube</h1>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Kids</li>
        <li>YouTube TV</li>
      </ul>
    </div>
  );
};

export default Sidebar;

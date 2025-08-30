import useGetVideos from "../utils/useGetvideos";
import { useState } from "react";

const VideoInfo = ({ videoId }) => {
  const [showDescription, setShowDescription] = useState(false);
  const videos = useGetVideos();

  const info = videos.filter((video) => video.id == videoId);
  //   console.log(info);

  const { title, channelTitle, publishedAt, description } =
    info[0]?.snippet || {};
  const { viewCount, likeCount } = info[0]?.statistics || {};
  const publishedDate = new Date(publishedAt);
  const dateString = publishedDate.toString();
  const date =
    dateString.substring(4, 10) + ", " + dateString.substring(11, 15);

  const shortDescription =
    info[0]?.snippet?.description.toString().length > 150
      ? info[0]?.snippet?.description.toString().slice(0, 150) + "...more"
      : description;
  //   console.log(shortDescription);

  return (
    <div className="">
      <h1 className="font-bold text-lg py-2">{title}</h1>
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex">
            <h5 className="text-4xl">👤</h5>
            <div>
              <h4 className="text-lg font-semibold">{channelTitle}</h4>
              <h5 className="text-xs text-gray-700">7.91M Subscribers</h5>
            </div>
          </div>
          <div className="p-2 px-4">
            <button className="py-2 text-sm px-4 rounded-full bg-black text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex pt-3 ">
          <div className="text-md mx-2 h-8 font-semibold bg-gray-200 rounded-full ">
            <button className="px-3 pt-1">
              👍
              {likeCount > 1000
                ? (likeCount / 1000).toFixed(0) + "K"
                : likeCount}
            </button>
            |<button className="px-3">👎</button>
          </div>
          <button className=" text-md mx-2 h-8 font-semibold justify-center px-3 bg-gray-200 rounded-full">
            🔁 Share
          </button>
          <button className=" text-md h-8 font-semibold justify-center px-3 bg-gray-200 rounded-full">
            ⬇️ Download
          </button>
        </div>
      </div>
      <div
        className={`text-sm mt-2 bg-gray-200 p-2 rounded-xl ${
          !showDescription ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={() => setShowDescription(true)}
      >
        <h4 className="font-semibold">
          {viewCount} views . {date}
        </h4>
        <h4 className="pr-20 pt-4 whitespace-pre-wrap">
          {!showDescription ? shortDescription : description}
        </h4>
      </div>
    </div>
  );
};

export default VideoInfo;

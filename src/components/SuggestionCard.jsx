import React from "react";

const SuggestionCard = ({ info }) => {
  const { title, channelTitle, publishedAt } = info?.snippet || {};
  const { viewCount } = info?.statistics || {};
  const { url } =
    info?.snippet?.thumbnails?.maxres ||
    info?.snippet?.thumbnails?.standard ||
    info?.snippet?.thumbnails?.high ||
    {};

  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);

  const diffMs = currentDate - publishedDate;
  //   console.log(currentDate);
  //   console.log(publishedDate);
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));

  return (
    <div className="grid grid-flow-col">
      <div className="p-2 w-45">
        <img className="rounded-md" src={url} alt="thumbnail" />
      </div>
      <div>
        <h1 className="font-bold text-sm ">
          {title.length > 55 ? title.slice(0, 55) + "..." : title}
        </h1>
        <h4 className="text-gray-500 text-sm ">{channelTitle}</h4>
        <h4 className="text-sm">
          {viewCount > 1000 ? (viewCount / 1000).toFixed(0) + "K" : viewCount}{" "}
          views . {days <= 0 ? hours + " hours" : days + " days"} ago
        </h4>
      </div>
    </div>
  );
};

export default SuggestionCard;

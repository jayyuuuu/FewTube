const VideoCard = ({ info }) => {
  // console.log(info);
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
    <div className="py-3 m-2 w-57">
      <img className="rounded-lg w-full h-2/3" src={url} alt="thumbnail" />
      <h1 className="font-bold py-2">
        {title.length > 70 ? title.slice(0, 70) + "..." : title}
      </h1>
      <h4 className="text-gray-500 text-sm ">{channelTitle}</h4>
      <h4 className="text-sm">
        {viewCount > 1000 ? (viewCount / 1000).toFixed(0) + "K" : viewCount}{" "}
        views . {days <= 0 ? hours + " hours" : days + " days"} ago
      </h4>
    </div>
  );
};
export default VideoCard;

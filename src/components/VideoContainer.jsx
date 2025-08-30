import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useGetVideos from "../utils/useGetvideos";

const VideoContainer = ({ data }) => {
  // const videos = useGetVideos();

  const apiVideos = useGetVideos();
  const searchVideos = data;
  const videos = data ? searchVideos : apiVideos;
  // console.log(videos);
  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => (
        <Link key={video.id.videoId || video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

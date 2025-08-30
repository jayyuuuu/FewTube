import { Link } from "react-router-dom";
import useGetVideos from "../utils/useGetvideos";
import SuggestionCard from "./SuggestionCard";

const SuggestionList = () => {
  const videoList = useGetVideos();
  return (
    <div className="max-h-screen ">
      {videoList.map((video, index) => (
        <Link key={video.id} to={"?v=" + video.id}>
          <SuggestionCard info={video} key={video.id} index={index} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default SuggestionList;
// overflow-y-auto

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import SuggestionList from "./SuggestionList";
import VideoInfo from "./VideoInfo";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // const searchResult = useSelector((store) => store.searchVideos.items);

  return (
    <div className=" pt-5 grid grid-flow-col px-15 ">
      <div className="py-2 pb-0 pl-0 w-190 ">
        <iframe
          className="rounded-xl"
          width="760"
          height="400"
          src={
            "https://www.youtube.com/embed/" +
            id +
            "?si=HuheD8r7Z2j3oU1f&autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="mt-4">
          <VideoInfo videoId={id} />
        </div>
        <div>
          <CommentContainer />
        </div>
      </div>
      <div className="px-4">
        <SuggestionList />
      </div>
    </div>

    // <div className="pt-5 grid grid-flow-col px-15">
    //   <VideoContainer data={searchResult} />
    // </div>
  );
};
export default WatchPage;

import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const searchResult = useSelector((store) => store.searchVideos.items);
  return (
    <div className=" flex-1 p-5 px-15 max-h-screen overflow-y-auto">
      <ButtonList />
      {searchResult.length == 0 ? (
        <VideoContainer />
      ) : (
        <VideoContainer data={searchResult} />
      )}
    </div>
  );
};
export default MainContainer;

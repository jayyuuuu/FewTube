import VideoCard from "./VideoCard";

const SearchVideoContiner = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap ">
      {data.map((item) => (
        <VideoCard key={item.id.videoId} info={item} />
      ))}
    </div>
  );
};
export default SearchVideoContiner;

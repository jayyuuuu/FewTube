import { useState, useEffect } from "react";
import { YOUTUBE_API } from "./constants";
const useGetVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return videos;
};

export default useGetVideos;

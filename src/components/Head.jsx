import Youtube from "/Youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_VIDEOS_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { searchResult } from "../utils/searchVideosSlice";
import SearchVideoContiner from "./searchVideoContainer";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API called: " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchSuggestion(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  // const handleSearch = async (s) => {
  //   console.log(s);
  //   const data = await fetch(SEARCH_VIDEOS_API + "jai shree ram");
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white grid grid-flow-col p-4 shadow-xl">
      <div className="flex">
        <img
          className="h-7 mt-1 mx-4 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/285px-Hamburger_icon.svg.png"
          alt="menu icon"
          onClick={() => handleToggleMenu()}
        />
        <a href="/">
          <img className=" h-7 mt-1 mx-4" src={Youtube} alt="FLexTube icon" />
        </a>
      </div>
      <div className="w-140 ">
        <input
          className="border-2 border-black rounded-l-full w-120 h-10 px-4"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border-2 border-l-0  border-black rounded-r-full h-10  w-18 bg-gray-300">
          🔍
        </button>
        {showSuggestion && searchQuery !== "" && (
          <div className="fixed bg-gray-100 p-4 rounded-xl w-120">
            <ul>
              {searchSuggestion.map((s) => (
                <li
                  key={s}
                  className="p-1 hover:bg-gray-200 "
                  onMouseDown={async () => {
                    console.log(s);
                    const data = await fetch(SEARCH_VIDEOS_API + s);
                    const json = await data.json();
                    // console.log(json.items);
                    dispatch(searchResult(json.items));
                  }}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <img
        className="h-7 mt-1 justify-self-end"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="user icon"
      />
    </div>
  );
};
export default Head;

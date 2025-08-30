import { useSelector } from "react-redux";

const Sidebar = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen);
  if (!showMenu) return null;

  return (
    <div className=" p-5 font-medium w-60 max-h-screen overflow-y-auto">
      <ul className="space-y-2 border-b border-gray-400 pb-4">
        <h1 className="font-bold text-xl">Home</h1>
        <h1 className="text-sm">Shorts</h1>
        <h1 className="text-sm">Subscription</h1>
        <h1 className="text-sm">YouTube Music</h1>
      </ul>
      <ul className="space-y-2 border-b py-4">
        <h1 className="font-bold pt-2 text-xl ">You</h1>
        <li className="text-sm">History</li>
        <li className="text-sm">Playlists</li>
        <li className="text-sm">Your Videos</li>
        <li className="text-sm">Watch Later</li>
        <li className="text-sm">Downloads</li>
        <li className="text-sm">Liked Videos</li>
        <li className="text-sm">Your clips</li>
      </ul>
      <ul className="space-y-2 border-b py-4">
        <h1 className="font-bold pt-2 text-xl">Explore</h1>
        <li className="text-sm">Trending</li>
        <li className="text-sm">Shopping</li>
        <li className="text-sm">Music</li>
        <li className="text-sm">Movies & Shows</li>
        <li className="text-sm">Live</li>
        <li className="text-sm">Gaming</li>
        <li className="text-sm">News</li>
        <li className="text-sm">Sports</li>
        <li className="text-sm">Learning</li>
        <li className="text-sm">Fashion & Beauty</li>
      </ul>
      <ul className="space-y-2 border-b py-4">
        <h1 className="font-bold pt-2 text-xl">More from YouTube</h1>
        <li className="text-sm">YouTube Premium</li>
        <li className="text-sm">YouTube Studio</li>
        <li className="text-sm">YouTube Kids</li>
        <li className="text-sm">YouTube TV</li>
      </ul>
    </div>
  );
};

export default Sidebar;

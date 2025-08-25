import MainContainer from "./MainContainet";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="bg-black-200 grid grid-flow-col">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;

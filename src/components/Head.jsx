import Youtube from "../../public/Youtube.png";
const Head = () => {
  return(
<div className="grid grid-flow-col p-4 shadow-xl">

<div className="flex">

    <img className="h-7 mx-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/285px-Hamburger_icon.svg.png" alt="menu icon" />
  
    <img className=" h-7 mx-4" src={Youtube} alt="FLexTube icon" />
</div>

<input className="border-2 border-black rounded-l-full h-8 px-4" type="text" placeholder="Search" />
<button className="border-2 border-l-0 border-black rounded-r-full h-8  w-14 bg-gray-300">🔍</button>
<img className="h-7 justify-self-end" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user icon" />
</div>
  
  
  )
  
};
export default Head;

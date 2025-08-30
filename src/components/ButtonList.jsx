import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Podcasts",
    "Mixes",
    "Gaming",
    "News",
    "Movies",
    "Live",
    "Lo-fi",
    "AI",
    "Cricket",
    "Cooking",
    "Comedy",
  ];

  return (
    <div className="flex space-x-5 pb-4">
      {buttonList.map((button, index) => (
        <Button name={button} key={button} index={index} />
      ))}
    </div>
  );
};
export default ButtonList;

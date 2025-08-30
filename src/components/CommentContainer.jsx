import React from "react";

const commentsData = [
  {
    name: "Jay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
    ],
  },
  {
    name: "Jay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [
          {
            name: "Jay",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [
              {
                name: "Jay",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                replies: [],
              },
            ],
          },
          {
            name: "Jay",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Jay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
    ],
  },
  {
    name: "Jay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
      {
        name: "Jay",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
    ],
  },
  {
    name: "Jay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [],
  },
];

const Comment = ({ data }) => {
  // console.log(data.replies);
  return (
    <div className="flex bg-gray-200 p-1 rounded-r-xl  border-l ">
      <img
        className="h-7 mt-1"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="user icon"
      />
      <div className="pl-2">
        <h3 className="text-sm font-bold">{data.name}</h3>
        <h4 className="text-xs">{data.text} </h4>
        <h4 className="text-xs">
          {data.replies.map((reply, index) => (
            <li key={index} className="p-2 ">
              {<Comment data={reply} />}
            </li>
          ))}
        </h4>
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="pt-2 w-full my-2">
      <h1 className="font-bold text-xl">Comments :</h1>

      <ul>
        {/* <li className="p-2 ">{<Comment data={commentsData[0]} />}</li> */}

        {commentsData.map((comment, index) => (
          <li key={index} className="p-2 ">
            {<Comment data={comment} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentContainer;

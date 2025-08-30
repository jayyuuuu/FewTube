import React from "react";

const Button = ({ name, index }) => {
  return (
    <button
      className={`m-1 mx-2 py-1 px-2 border-gray-50 rounded-lg font-medium text-sm ${
        index === 0 ? "bg-black text-white " : "bg-gray-200 hover:bg-gray-300"
      } `}
    >
      {name}
    </button>
  );
};
export default Button;

import React, { useState } from "react";

function Shelf({ shelfName }) {
  const [info, setInfo] = useState(false);

  const handleMouseEnter = () => {
    setInfo(true);
  };

  const handleMouseLeave = () => {
    setInfo(false);
  };

  return (
    <div
      className="w-full h-full bg-yellow-500 hover:bg-yellow-200 cursor-pointer text-[9px] flex justify-center items-center relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute -top-10 p-1 bg-green-300 ${
          info ? "flex" : "hidden"
        }`}
      >
        {shelfName}
      </div>
    </div>
  );
}

export default Shelf;

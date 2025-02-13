import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
import Shelf from "./Shelf";

function SectionFront() {
  const { selectedSection, setSelectedSection, shelves } =
    useContext(BooksContext);
  return (
    <div className="relative w-full h-full p-5">
      <button
        onClick={() => setSelectedSection(!selectedSection)}
        className="absolute top-2 right-2 border-2 p-1 bg-white"
      >
        BACK---
      </button>
      <div className="w-full h-full grid grid-rows-3 grid-cols-3 items-center text-center  border-2 border-yellow-600">
        {shelves.map((data, index) => (
          <Shelf key={index} name={data.name} />
        ))}
      </div>
    </div>
  );
}

export default SectionFront;

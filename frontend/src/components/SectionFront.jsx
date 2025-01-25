import React from "react";
import Shelf from "./Shelf";
import data from "../resources/books.json";
function SectionFront({ sectionTitle, sectionKey }) {
  return (
    <div className="bg-blue-200 grid grid-cols-10 grid-rows-2 place-content-center p-1 gap-1 relative">
      {Object.keys(data[sectionKey].shelves).map((shelfKey) => (
        <Shelf shelfName={shelfKey} />
      ))}
      <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white p-2 uppercase text-xs">
        {sectionTitle}
      </div>
    </div>
  );
}

export default SectionFront;

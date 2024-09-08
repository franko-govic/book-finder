import React from "react";
import Section from "./Section";
import data from "../resources/books.json";

function Library() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className=" w-full h-2/3 p-5 grid grid-rows-2 grid-cols-2 gap-x-20 gap-y-10">
        {Object.keys(data).map((sectionKey, index) => (
          <Section
            sectionTitle={data[sectionKey].title}
            sectionKey={sectionKey}
          />
        ))}
      </div>
      <div className="h-1/3 flex bg-yellow-50 ">
        <div className="w-2/5 bg-red-100 flex justify-center items-center">
          COVER
        </div>
        <div className="w-3/5 bg-green-100 flex justify-center items-center">
          INFO
        </div>
      </div>
    </div>
  );
}

export default Library;

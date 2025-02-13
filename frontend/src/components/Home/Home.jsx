import React from "react";
import BookSearch from "../BookSearch";
import InteractiveMap from "../InteractiveMap/InteractiveMap";

function Home() {
  return (
    <div className="w-full h-[82vh] flex flex-col  lg:flex-row gap-5   ">
      <div className="w-full h-1/2  lg:w-3/4 lg:h-full flex justify-center items-center ">
        <InteractiveMap />
      </div>
      <div className="w-full h-1/2 lg:w-1/4 lg:h-full  border text-sm">
        <BookSearch />
      </div>
    </div>
  );
}

export default Home;

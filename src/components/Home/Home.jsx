import React from "react";
import BookSearch from "../BookSearch";

function Home() {
  return (
    <div className="w-full h-[87vh] flex flex-col  lg:flex-row gap-5 border-500  ">
      <div className="w-full h-3/5  lg:w-3/4 lg:h-full flex justify-center items-center border">
        DIV 1
      </div>
      <div className="w-full h-2/5 lg:w-1/4 lg:h-full  border text-sm">
        {" "}
        <BookSearch />
      </div>
    </div>
  );
}

export default Home;

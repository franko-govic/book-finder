import React from "react";

function SectionTop({ data }) {
  return (
    <div className="border-2 border-yellow-700 p-5 flex justify-center items-center w-full h-fit">
      {data.name}
    </div>
  );
}

export default SectionTop;

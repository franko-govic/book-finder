import React from "react";

function Shelf({ name }) {
  return (
    <div className="w-full h-full flex  justify-center items-center border-2  border-yellow-700">
      {name}
    </div>
  );
}

export default Shelf;

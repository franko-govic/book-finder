import React, { useState } from "react";

function LayoutManager({ toogleGrid, setToggleGrid }) {
  const [toogleManager, setToogleManager] = useState(false);

  return (
    <div className="bg-white border-2 border-black rounded-md p-2 absolute right-5 top-5 h-fit w-fit cursor-pointer flex flex-col gap-2">
      <h2
        className="border-b-2 border-black"
        onClick={() => setToogleManager(!toogleManager)}
      >
        Layout Manager
      </h2>
      <div
        className={`${
          toogleManager ? "" : "hidden"
        } text-sm flex flex-col gap-2`}
      >
        <div>
          <p>Add new section</p>
        </div>
        <button
          className="border border-black px-2 py-1 rounded"
          onClick={() => setToggleGrid(!toogleGrid)}
        >
          GRID
        </button>
      </div>
    </div>
  );
}

export default LayoutManager;

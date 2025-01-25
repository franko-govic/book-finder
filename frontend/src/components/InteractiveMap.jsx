import React, { useState } from "react";
import SectionFront from "./SectionFront";
import SectionTop from "./SectionTop";
import LayoutManager from "./LayoutManager";

function InteractiveMap() {
  const [toogleGrid, setToggleGrid] = useState(true);

  const layoutSize = 100;
  const gridSize = layoutSize / 10;
  return (
    <div className="border w-full h-full relative  grid grid-cols-10">
      <LayoutManager toogleGrid={toogleGrid} setToggleGrid={setToggleGrid} />
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className={`${toogleGrid ? "" : "hidden"} border`}
        ></div>
      ))}

      <SectionTop size={gridSize} x={0} y={1} w={2} h={1} />
      <SectionTop size={gridSize} x={2} y={6} w={2} h={1} />
      <SectionTop size={gridSize} x={1} y={3} w={2} h={1} />
    </div>
  );
}

export default InteractiveMap;

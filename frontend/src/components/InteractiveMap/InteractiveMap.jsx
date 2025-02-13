import React, { useState } from "react";

import TopView from "../TopView/TopView";

function InteractiveMap() {
  const [toggleTopView, setToggleTopView] = useState(true);

  const [toggleFrontView, setFrontView] = useState(true);

  return (
    <div className="border w-full h-full relative">
      <button className="absolute z-10 top-5 right-5 border">topview</button>
      {toggleTopView && <TopView />}
    </div>
  );
}

export default InteractiveMap;

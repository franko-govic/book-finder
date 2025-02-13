import React, { useContext } from "react";
import SectionFront from "../FrontView/SectionFront";

import TopView from "../TopView/TopView";
import { BooksContext } from "../../context/BooksContext";

function InteractiveMap() {
  const { selectedSection } = useContext(BooksContext);

  return (
    <div className="border w-full h-full relative">
      {!selectedSection ? <TopView /> : <SectionFront />}
    </div>
  );
}

export default InteractiveMap;

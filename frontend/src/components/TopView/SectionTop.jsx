import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

function SectionTop({ data }) {
  const { setSelectedSection } = useContext(BooksContext);

  return (
    <div
      onClick={() => setSelectedSection(data.section_id)}
      className="border-2 border-yellow-700 p-5 flex justify-center items-center w-full h-fit"
    >
      {data.name}
    </div>
  );
}

export default SectionTop;

import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

function SectionTop({ data }) {
  const { setSelectedSection, searchResults } = useContext(BooksContext);

  const matchedSection =
    searchResults &&
    searchResults.some((result) => {
      result.section_id === data.section_id;
    });

  return (
    <div
      onClick={() => setSelectedSection(data.section_id)}
      className={`border-2 border-yellow-700 p-5 flex justify-center items-center w-full h-fit  ${
        matchedSection ? "bg-blue-500" : ""
      }`}
    >
      {data.name}
    </div>
  );
}

export default SectionTop;

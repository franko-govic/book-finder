import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

function Shelf({ data }) {
  const { searchResults } = useContext(BooksContext);

  const matchedShelf =
    searchResults &&
    searchResults.some((result) => result.shelf_id === data.shelf_id);

  return (
    <div
      className={`w-full h-full flex justify-center items-center border-2 border-yellow-700 ${
        matchedShelf ? "bg-blue-500" : ""
      }`}
    >
      {data.name}
    </div>
  );
}

export default Shelf;

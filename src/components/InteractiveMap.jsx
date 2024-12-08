import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

function InteractiveMap() {
  const { allSections, searchResults } = useContext(BooksContext);

  const bookMatch = (shelf) => {
    return shelf.books.some((book) =>
      searchResults.some((searchBook) => searchBook.title === book.title)
    );
  };

  return (
    <div className="w-full h-full flex flex-col p-5 overflow-y-auto">
      {allSections.map((library, index) => {
        return (
          <div
            key={index}
            className="text-xs text-center p-5  flex-1 flex flex-col gap-2 "
          >
            <div className="flex-1  flex">
              {library.subsections.map((subsection, subIndex) => {
                return (
                  <div key={subIndex} className=" w-full h-full flex flex-col ">
                    <p className="bg-yellow-700 text-white w-fit mx-auto p-1">
                      {subsection.subsectionName}
                    </p>

                    <div className="flex-1 flex flex-col ">
                      {subsection.shelves.map((shelf, shelfIndex) => {
                        const shelfMatched = bookMatch(shelf);

                        return (
                          <div
                            key={shelfIndex}
                            className={`border-2 border-yellow-800 flex-1 flex flex-col justify-center items-center ${
                              shelfMatched ? "bg-yellow-600" : ""
                            }`}
                          >
                            <p className="h-[5vh]"></p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InteractiveMap;

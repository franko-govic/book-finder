import React, { useState, useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const BookSearch = () => {
  const { searchBooks } = useContext(BooksContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length >= 3) {
      setSearchResults(searchBooks(term));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-full h-full flex  flex-col justify-between gap-5 p-5 ">
      <div className="h-1/5 flex flex-col ">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <div className="h-4/5 flex flex-col gap-2">
        <h3>Results:</h3>
        <div className="h-full overflow-y-auto scroll text-sm border">
          {searchResults.length === 0 && searchTerm.length >= 3 ? (
            <p>No results found.</p>
          ) : (
            <div className=" p-5 grid grid-cols-1 content-center gap-5  ">
              {searchResults.map((book) => {
                const availableCopies = book.copies.filter(
                  (copy) => copy.status === "available"
                ).length;
                const totalCopies = book.copies.length;

                return (
                  <div
                    key={book.isbn}
                    className="flex w-full border-2 rounded-lg p-5 gap-5 cursor-pointer hover:brightness-125 hover:shadow-md"
                  >
                    <div className="flex justify-center items-center bg-blue-500 w-1/4 rounded-md">
                      cover
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <p>Title: {book.title}</p>
                      <p>Author: {book.author}</p>
                      <p>Section: {book.sectionName}</p>
                      <p>Subsection: {book.subsectionName}</p>
                      <p>Shelf Position: {book.shelfPosition}</p>
                      <p>Shelf ID: {book.shelfId}</p>
                      <p>
                        Available: {availableCopies} / {totalCopies} copies
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSearch;

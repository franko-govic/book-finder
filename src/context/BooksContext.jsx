import { createContext, useEffect, useState } from "react";
import data from "../resources/books.json";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [allSections, setAllSections] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const flattenedBooks = data.sections.flatMap((section) =>
      section.subsections.flatMap((subsection) =>
        subsection.shelves.flatMap((shelf) =>
          shelf.books.map((book) => ({
            ...book,
            sectionName: section.name,
            subsectionName: subsection.name,
            shelfPosition: shelf.position,
            shelfId: shelf.shelfId,
            author: shelf.author,
          }))
        )
      )
    );
    setAllBooks(flattenedBooks);
  }, []);

  useEffect(() => {
    const flattenedSections = data.sections.map((section) => ({
      sectionName: section.name,
      subsections: section.subsections.map((subsection) => ({
        subsectionName: subsection.name,
        shelves: subsection.shelves.map((shelf) => ({
          shelfId: shelf.shelfId,
          shelfPosition: shelf.position,
          author: shelf.author,
          books: shelf.books,
        })),
      })),
    }));

    setAllSections(flattenedSections);
  }, []);

  console.log(allSections);
  const searchBooks = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerSearchTerm) ||
        book.author.toLowerCase().includes(lowerSearchTerm)
    );
  };

  return (
    <BooksContext.Provider
      value={{
        searchBooks,
        allBooks,
        allSections,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import data from "../resources/books.json";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);

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

  const searchBooks = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerSearchTerm) ||
        book.author.toLowerCase().includes(lowerSearchTerm)
    );
  };

  return (
    <BooksContext.Provider value={{ searchBooks, allBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

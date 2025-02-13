import { createContext, useEffect, useState } from "react";
import data from "../resources/books.json";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allBooks, setAllBooks] = useState([]);
  const [allSections, setAllSections] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [floors, setFloors] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(0);
  const [shelves, setShelves] = useState([]);

  //All floors
  useEffect(() => {
    const fetchFloors = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/floors/");
        if (!response.ok) throw new Error("Failed to fetch floors");

        const data = await response.json();
        console.log("Fetched Floors Data:", data);
        setFloors(data.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFloors();
  }, []);

  //Sections by floor_id
  useEffect(() => {
    if (!selectedFloor) return;

    const fetchSections = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/sections/floor/${selectedFloor}`
        );
        if (!response.ok) throw new Error("Failed to fetch sections");

        const data = await response.json();
        setSections(data.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };

    fetchSections();
    console.log("Selected Floor in Context Updated:", selectedFloor);
  }, [selectedFloor]);

  //Shelves by section_id
  useEffect(() => {
    if (!selectedSection) return;

    const fetchSections = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/shelves/section/${selectedSection}`
        );
        if (!response.ok) throw new Error("Failed to fetch shelves");

        const data = await response.json();
        setShelves(data.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };

    fetchSections();
  }, [selectedSection]);

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
        floors,
        loading,
        error,
        selectedFloor,
        setSelectedFloor,
        sections,
        setSections,
        selectedSection,
        setSelectedSection,
        shelves,
        setShelves,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

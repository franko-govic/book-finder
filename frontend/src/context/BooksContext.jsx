import { createContext, useEffect, useState } from "react";
import data from "../resources/books.json";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [floors, setFloors] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(0);
  const [shelves, setShelves] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  //All books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/books/");
        if (!response.ok) throw new Error("Failed to fetch books");

        const data = await response.json();
        console.log("Fetched Books Data:", data);
        setBooks(data.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  //Book search function
  const searchBooks = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerSearchTerm) ||
        book.author.toLowerCase().includes(lowerSearchTerm)
    );
  };

  return (
    <BooksContext.Provider
      value={{
        searchBooks,
        books,
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

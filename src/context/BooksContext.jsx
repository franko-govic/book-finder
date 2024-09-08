import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState();
  const [search, setSearch] = useState("");
};

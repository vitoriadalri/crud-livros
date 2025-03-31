import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books"); 
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books)); 
  }, [books]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const deleteBook = (index) => {
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  };

  const editBook = (index, updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) => (i === index ? updatedBook : book))
    );
  };

  return (
    <BookContext.Provider value={{ books, setBooks, addBook, deleteBook, editBook }}>
      {children}
    </BookContext.Provider>
  );
};

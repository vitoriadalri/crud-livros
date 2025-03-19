import React from "react";
import { createContext, useState } from "react";


export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]); // Lista de livros

  // Função para adicionar um livro na lista
  const addBook = (newBook) => {
    setBooks([...books, newBook]); // Adiciona um novo livro à lista existente
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

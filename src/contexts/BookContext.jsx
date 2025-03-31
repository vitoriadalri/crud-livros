import React, { createContext, useState, useEffect } from "react";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "../services/api";
import axios from "axios";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books"); 
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books)); 
  }, [books]);

  const addBook = async (newBook) => {
    try {
      const response = await createBook(newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  };

  const removeBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error("Erro ao remover livro:", error);
    }
  };


  const editBook = async (id, updatedBook) => {
    try {
      const url = `http://localhost:5000/books/${id}`;
      console.log("Enviando requisição para:", url);
      const response = await axios.put(url, updatedBook);
      console.log("Livro editado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao editar livro:", error);
    }
  };
  
  
  
  return (
    <BookContext.Provider value={{ books, setBooks, addBook, removeBook, editBook }}>
      {children}
    </BookContext.Provider>
  );
};

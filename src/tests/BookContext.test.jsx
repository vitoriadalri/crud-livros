import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BookProvider, BookContext } from "../contexts/BookContext";
import * as api from "../services/api";

vi.mock("../services/api");

describe("BookContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adiciona um novo livro com addBook", async () => {
    const mockResponse = {
      id: 1,
      title: "Teste",
      author: "Autor",
      genre: "Ficção",
      date: "2024-04-11"
    };

    api.createBook.mockResolvedValueOnce({ data: mockResponse });

    let contextValue;

    render(
      <BookProvider>
        <BookContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </BookContext.Consumer>
      </BookProvider>
    );

    await waitFor(() => contextValue.addBook(mockResponse));

    await waitFor(() => {
      expect(contextValue.books).toContainEqual(mockResponse);
      expect(localStorage.getItem("books")).toContain("Teste");
    });
  });

  it("remove um livro com removeBook", async () => {
    const initialBooks = [
      { id: 1, title: "Livro A", author: "Autor A", genre: "Ficção", date: "2024-04-11" },
      { id: 2, title: "Livro B", author: "Autor B", genre: "Drama", date: "2024-04-10" }
    ];
    api.deleteBook.mockResolvedValueOnce();

    localStorage.setItem("books", JSON.stringify(initialBooks));

    let contextValue;

    render(
      <BookProvider>
        <BookContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </BookContext.Consumer>
      </BookProvider>
    );

    await waitFor(() => contextValue.removeBook(1));

    expect(contextValue.books).toHaveLength(1);
    expect(contextValue.books[0].id).toBe(2);
  });
});

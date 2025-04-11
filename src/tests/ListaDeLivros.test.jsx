import { render, screen, waitFor } from "@testing-library/react";
import BookList from "../pages/ListaDeLivros";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import * as api from "../services/api";


vi.mock("../services/api", async () => {
  const actual = await vi.importActual("../services/api");
  return {
    ...actual,
    getBooks: vi.fn(),
    deleteBook: vi.fn()
  };
});

const mockBooks = [
  {
    id: 1,
    title: "Livro Teste",
    author: "Autor Teste",
    genre: "Gênero Teste",
    date: "2024-04-10"
  }
];

describe("BookList", () => {
  beforeEach(() => {
    api.getBooks.mockResolvedValue({ data: mockBooks });
  });

  it("renderiza os livros corretamente", async () => {
    render(
      <BrowserRouter>
        <BookList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Livro Teste")).toBeInTheDocument();
      expect(screen.getByText("Autor: Autor Teste")).toBeInTheDocument();
      expect(screen.getByText("Gênero: Gênero Teste")).toBeInTheDocument();
      expect(screen.getByText("Lido em: 2024-04-10")).toBeInTheDocument();
    });
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookContext } from "../contexts/BookContext";
import { MemoryRouter } from "react-router-dom";
import BookList from "../components/BookList";

const renderWithContext = (books = [], deleteBook = vi.fn()) => {
  return render(
    <MemoryRouter>
      <BookContext.Provider value={{ books, deleteBook }}>
        <BookList />
      </BookContext.Provider>
    </MemoryRouter>
  );
};

describe("BookList", () => {
  it("mostra mensagem quando a lista está vazia", () => {
    renderWithContext([]);

    expect(screen.getByText("Nenhum livro cadastrado.")).toBeInTheDocument();
  });

  it("renderiza os livros corretamente", () => {
    const books = [
      { title: "Dom Casmurro", author: "Machado de Assis", genre: "Romance", date: "1899-01-01" },
      { title: "Capitães da Areia", author: "Jorge Amado", genre: "Drama", date: "1937-01-01" },
    ];

    renderWithContext(books);

    expect(screen.getByText("Dom Casmurro")).toBeInTheDocument();
    expect(screen.getByText("Capitães da Areia")).toBeInTheDocument();
    expect(screen.getAllByText("Editar").length).toBe(2);
  });

  it("chama deleteBook ao clicar em 'Excluir'", () => {
    const deleteBookMock = vi.fn();
    const books = [
      { title: "Livro Teste", author: "Autor Teste", genre: "Gênero", date: "2024-04-01" }
    ];

    renderWithContext(books, deleteBookMock);

    const deleteButton = screen.getByText("Excluir");
    fireEvent.click(deleteButton);

    expect(deleteBookMock).toHaveBeenCalledWith(0);
  });

  it("renderiza link de cadastro", () => {
    renderWithContext();

    expect(screen.getByText("Cadastrar novo livro")).toBeInTheDocument();
  });
});
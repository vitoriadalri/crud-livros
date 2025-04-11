import { render, screen } from "@testing-library/react";
import Editar from "../pages/Editar";
import { BookContext } from "../contexts/BookContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import * as api from "../services/api";
import { vi } from "vitest";

vi.mock("../services/api", () => ({
  getBookById: vi.fn(),
}));

describe("Editar", () => {
  const mockEditBook = vi.fn();

  const renderWithRouter = (id = "0") => {
    render(
      <BookContext.Provider value={{ editBook: mockEditBook }}>
        <MemoryRouter initialEntries={[`/editar/${id}`]}>
          <Routes>
            <Route path="/editar/:id" element={<Editar />} />
          </Routes>
        </MemoryRouter>
      </BookContext.Provider>
    );
  };

  it("renderiza o componente EditBook com os dados do livro", async () => {
    api.getBookById.mockResolvedValueOnce({
      data: { title: "Livro Mock", author: "Autor Mock", genre: "Gênero Mock", date: "2024-04-11" },
    });

    renderWithRouter("123");

    expect(await screen.findByDisplayValue("Livro Mock")).toBeInTheDocument();
  });
});

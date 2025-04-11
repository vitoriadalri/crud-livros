import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditBook from "../components/EditBook";
import { BookContext } from "../contexts/BookContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import * as api from "../services/api";
import { vi } from "vitest";

// mocks
const mockEditBook = vi.fn();
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../services/api", () => ({
  getBookById: vi.fn(),
}));

describe("EditBook", () => {
  const renderWithRouter = (id = "0") => {
    render(
      <BookContext.Provider value={{ editBook: mockEditBook }}>
        <MemoryRouter initialEntries={[`/editar/${id}`]}>
          <Routes>
            <Route path="/editar/:id" element={<EditBook />} />
          </Routes>
        </MemoryRouter>
      </BookContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza o formulário com dados do livro", async () => {
    api.getBookById.mockResolvedValueOnce({
      data: { title: "Livro Teste", author: "Autor Teste", genre: "Gênero Teste", date: "2024-04-11" },
    });

    renderWithRouter("0");

    expect(await screen.findByDisplayValue("Livro Teste")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Autor Teste")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Gênero Teste")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2024-04-11")).toBeInTheDocument();
  });

  it("envia dados editados corretamente", async () => {
    api.getBookById.mockResolvedValueOnce({
      data: { title: "Old Title", author: "Old Author", genre: "Old Genre", date: "2024-04-11" },
    });

    renderWithRouter("1");

    const titleInput = await screen.findByDisplayValue("Old Title");
    fireEvent.change(titleInput, { target: { value: "New Title" } });

    const saveButton = screen.getByRole("button", { name: /salvar/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockEditBook).toHaveBeenCalledWith(1, expect.objectContaining({ title: "New Title" }));
      expect(mockNavigate).toHaveBeenCalledWith("/lista-livros");
    });
  });
});

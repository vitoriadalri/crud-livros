import { render, screen } from "@testing-library/react";
import Cadastro from "../pages/Cadastro";
import { BookContext } from "../contexts/BookContext";
import { MemoryRouter } from "react-router-dom";

describe("Cadastro", () => {
  it("renderiza o componente BookForm", () => {
    const mockAddBook = vi.fn();

    render(
      <BookContext.Provider value={{ addBook: mockAddBook }}>
        <MemoryRouter>
          <Cadastro />
        </MemoryRouter>
      </BookContext.Provider>
    );

    
    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
  });
});

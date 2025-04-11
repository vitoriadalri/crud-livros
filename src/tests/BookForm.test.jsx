import { render, screen, fireEvent } from "@testing-library/react";
import BookForm from "../components/BookForm";
import { BookContext } from "../contexts/BookContext";
import { BrowserRouter } from "react-router-dom";

const mockAddBook = vi.fn();

const renderWithContext = () => {
  return render(
    <BrowserRouter>
      <BookContext.Provider value={{ addBook: mockAddBook }}>
        <BookForm />
      </BookContext.Provider>
    </BrowserRouter>
  );
};

describe("BookForm", () => {
  beforeEach(() => {
    mockAddBook.mockClear(); 
  });

  it("renderiza os campos do formulário", () => {
    renderWithContext();
    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/autor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gênero/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
  });

  it("adiciona um livro e mostra a mensagem de sucesso", () => {
    renderWithContext();

  
    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: "Dom Casmurro" } });
    fireEvent.change(screen.getByLabelText(/autor/i), { target: { value: "Machado de Assis" } });
    fireEvent.change(screen.getByLabelText(/gênero/i), { target: { value: "Romance" } });
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: "1899-01-01" } });

    
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));

    
    expect(mockAddBook).toHaveBeenCalledWith({
      title: "Dom Casmurro",
      author: "Machado de Assis",
      genre: "Romance",
      date: "1899-01-01",
    });

    
    expect(screen.getByText(/livro adicionado com sucesso/i)).toBeInTheDocument();

    
    expect(screen.getByRole("link", { name: /ver lista completa/i })).toBeInTheDocument();
  });

  it("não chama addBook se algum campo estiver vazio", () => {
    renderWithContext();

    
    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: "Livro Incompleto" } });

    
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));

    expect(mockAddBook).not.toHaveBeenCalled();
  });
});

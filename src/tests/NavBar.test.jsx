import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { describe, it, expect } from "vitest";

describe("NavBar", () => {
  it("renderiza todos os itens de navegação", () => {
    render(<NavBar />);

    expect(screen.getByText("Páginal Inicial")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Lista de Livros")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });

  it("cada item de navegação deve ter o href correto", () => {
    render(<NavBar />);

    expect(screen.getByText("Páginal Inicial").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Sobre").closest("a")).toHaveAttribute("href", "/sobre");
    expect(screen.getByText("Lista de Livros").closest("a")).toHaveAttribute("href", "/lista-livros");
    expect(screen.getByText("Cadastrar").closest("a")).toHaveAttribute("href", "/cadastro");
  });
});
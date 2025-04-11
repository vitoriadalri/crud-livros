import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { describe, it, expect } from "vitest";

describe("Home", () => {
  it("renderiza os textos principais da página", () => {
    render(<Home />);

    expect(screen.getByText("Página Inicial")).toBeInTheDocument();
    expect(screen.getByText("Bem vindo ao Reading Journal!")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /clique aqui para acessar a lista completa de livros/i })
    ).toBeInTheDocument();
  });
});

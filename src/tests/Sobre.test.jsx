import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Sobre from "../pages/Sobre";

describe("Sobre", () => {
  it("renderiza os textos corretamente", () => {
    render(<Sobre />);
    
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Esta é uma aplicação para um CRUD de um Reading Journal/i
      )
    ).toBeInTheDocument();
  });
});

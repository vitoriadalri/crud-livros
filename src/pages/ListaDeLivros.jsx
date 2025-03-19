import React from "react";
import { useContext } from "react";
import { BookContext } from "../components/BookList";
import { Link } from "react-router-dom";

const BookList = () => {
  const { books } = useContext(BookContext); // Obtém a lista de livros do contexto

  return (
    <div>
      <h2 className="titulo-principal titulo-listaLivros">Lista de Livros</h2>
      {books.length === 0 ? (
        <p className="informacoes-secundarias">Nenhum livro cadastrado.</p>
      ) : (
        <ul className="lista" >
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> - {book.author} ({book.genre}) - {book.date}
            </li>
          ))}
        </ul>
      )}
      <br />
      <Link className="botao botao-livro" to="/cadastro">Cadastrar novo livro</Link>
    </div>
  );
};

export default BookList;

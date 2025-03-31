import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext"; 
import { Link } from "react-router-dom";



const BookList = () => {
  const { books, deleteBook } = useContext(BookContext);
  const handleDelete = (index) => {
    deleteBook(index); 
  }

  return (
    <div>
      <h2 className="titulo-principal titulo-listaLivros">Lista de Livros</h2>
      {books.length === 0 ? (
        <p className="informacoes-secundarias">Nenhum livro cadastrado.</p>
      ) : (
        <ul className="lista">
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> - {book.author} ({book.genre}) - {book.date}
              <Link to={`/editar/${index}`} className="botao-editar">Editar</Link>
              <button onClick={() => handleDelete(index)} className="botao botao-excluir">Excluir</button>
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

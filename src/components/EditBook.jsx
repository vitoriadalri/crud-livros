import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { books, editBook } = useContext(BookContext); 
  const { index } = useParams();
  const navigate = useNavigate();

  const bookToEdit = books[index] || { title: "", author: "", genre: "", date: "" };
  const [updatedBook, setUpdatedBook] = useState(bookToEdit);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof editBook === "function") {
      editBook(Number(index), updatedBook); 
      navigate("/lista-livros");
    } else {
      console.error("editBook não é uma função. Verifique o contexto.");
    }
  };

  return (
    <div>
      <h2 className="titulo-principal">Editar Livro</h2>
      <form className= "formulario" onSubmit={handleSubmit}>
      <label className="label-cadastro">Título:
        <input className="input-cadastro" type="text" name="title" value={updatedBook.title} onChange={handleChange} placeholder="Título" required />
      </label>
      <label className="label-cadastro">Autor:
        <input className="input-cadastro" type="text" name="author" value={updatedBook.author} onChange={handleChange} placeholder="Autor" required />
      </label>
      <label className="label-cadastro">Gênero:
        <input className="input-cadastro" type="text" name="genre" value={updatedBook.genre} onChange={handleChange} placeholder="Gênero" required />
      </label>
        <input className="input-cadastro" type="date" name="date" value={updatedBook.date} onChange={handleChange} required />
        <button type="submit"  className="botao botao-salvar">Salvar</button>
      </form>
    </div>
  );
};

export default EditBook;

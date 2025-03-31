import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "../services/api";

const EditBook = () => {
  const { editBook } = useContext(BookContext); 
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", genre: "", date: "" });
;
  


useEffect(() => {
  const fetchBook = async () => {
    try {
      const response = await getBookById(id);
      if (response.data) {
        setBook(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  };
  fetchBook();
}, [id]);


  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ID enviado para editBook:", id);
    console.log("Dados enviados para editBook:", book);
    await editBook(Number(id), book);
    navigate("/lista-livros");
  };
  

  return (
    <div>
      <h2 className="titulo-principal">Editar Livro</h2>
      <form className= "formulario" onSubmit={handleSubmit}>
      <label className="label-cadastro">Título:
        <input className="input-cadastro" type="text" name="title" value={book.title || ""} onChange={handleChange} placeholder="Título" required />
      </label>
      <label className="label-cadastro">Autor:
        <input className="input-cadastro" type="text" name="author" value={book.author || ""} onChange={handleChange} placeholder="Autor" required />
      </label>
      <label className="label-cadastro">Gênero:
        <input className="input-cadastro" type="text" name="genre" value={book.genre || ""} onChange={handleChange} placeholder="Gênero" required />
      </label>
        <input className="input-cadastro" type="date" name="date" value={book.date || ""} onChange={handleChange} required />
        <button type="submit"  className="botao botao-salvar">Salvar</button>
      </form>
    </div>
  );
};

export default EditBook;

import { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

const BookForm = () => {
  const { addBook } = useContext(BookContext); 
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [bookAdded, setBookAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre || !date) return;

    const newBook = { title, author, genre, date };
    
    addBook(newBook); 
    setBookAdded(true); 
    setTitle("");
    setAuthor("");
    setGenre("");
    setDate("");
  };

  return (
    <div >
      <h2 className="titulo-principal titulo-cadastro">Cadastrar</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label className="label-cadastro" htmlFor="titulo"> Título: </label>
          <input className="input-cadastro" id="titulo" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <br />
        <div >
          <label className="label-cadastro" htmlFor="autor"> Autor: </label>
          <input className="input-cadastro" id="autor" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <br />
        <div>
          <label className="label-cadastro" htmlFor="genero"> Gênero: </label>
          <input className="input-cadastro" id="genero" type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <br />
        <div>
          <label className="label-cadastro" htmlFor="data"> Data: </label>
          <input className="input-cadastro" id="data" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <br />
        <button className="botao botao-cadastro" type="submit">Adicionar</button>
      </form>
      <br />

      {bookAdded && (
        <div>
          <p className="informacoes-livroAdicionado">Livro adicionado com sucesso!</p>
          <Link className="informacoes-listaCompleta" to="/lista-livros">Ver lista completa</Link>
        </div>
      )}
    </div>
  );
};

export default BookForm;

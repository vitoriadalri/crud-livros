// import React, { useContext, useState, useEffect } from "react";
// import { BookContext } from "../contexts/BookContext";
// import { Link } from "react-router-dom";
// import { getBooks, deleteBook } from "../services/api";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//       getBooks().then(response => setBooks(response.data));
//   }, []);

//   function handleDelete(id) {
//     deleteBook(id).then(() => {
//         setBooks(books.filter(book => book.id !== id));
//     });
// }

//   return (
//     <div>
//       <h2 className="titulo-principal titulo-listaLivros">Lista de Livros</h2>
//       {books.length === 0 ? (
//         <p className="informacoes-secundarias">Nenhum livro cadastrado.</p>
//       ) : (
//         <ul className="lista">
//           {books.map((book) => (
//             <li key={book.id}>
//               <strong>{book.title}</strong> - {book.author} ({book.genre}) - {book.date}
//               <Link to={`/editar/${book.id}`} className="botao-editar">Editar</Link>
//               <button onClick={() => handleDelete(book.id)} className="botao-excluir">Excluir</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <br />
//       <Link className="botao botao-livro" to="/cadastro">Cadastrar novo livro</Link>
//     </div>
//   );
// };

// export default BookList;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../services/api";
import { Box, Card, CardContent, Typography, IconButton, Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((response) => setBooks(response.data));
  }, []);

  function handleDelete(id) {
    deleteBook(id).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  }

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Lista de Livros</Typography>

      {books.length === 0 ? (
        <Typography variant="body1"  sx={{ fontSize: "2.8rem",
          color: "#050535",
          textaAlign: "center",
          paddingTop: "2rem",
          marginBottom: "2rem",}}
>Nenhum livro cadastrado.
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ minWidth: 275, padding: 2, position: "relative" }}>
                <CardContent>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2">Autor: {book.author}</Typography>
                  <Typography variant="body2">Gênero: {book.genre}</Typography>
                  <Typography variant="body2">Lido em: {book.date}</Typography>
                </CardContent>
                <Box sx={{ position: "absolute", top: 8, right: 8, display: "flex", gap: 1 }}>
                  <IconButton size="small" color="primary" component={Link} to={`/editar/${book.id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDelete(book.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Box mt={3}>
        <Button variant="contained" color="primary" component={Link} to="/cadastro">
          Cadastrar novo livro
        </Button>
      </Box>
    </Box>
  );
};

export default BookList;

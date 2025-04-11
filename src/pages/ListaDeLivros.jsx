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
            <Grid key={book.id} sx={{ width: { xs: "100%", sm: "50%", md: "33.33%", lg: "25%" } }}>
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

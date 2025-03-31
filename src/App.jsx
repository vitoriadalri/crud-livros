import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import ListaDeLivros from "./pages/ListaDeLivros";
import Editar from "./pages/Editar";
import { BookProvider } from "./contexts/BookContext"; 

const App = () => {
  return (
    <BookProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/lista-livros" element={<ListaDeLivros />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
};

export default App;

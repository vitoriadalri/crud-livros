import React from 'react';
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from './pages/Sobre';
import ListaDeLivros from "./pages/ListaDeLivros";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/cadastro" element={<Cadastro />} />
     <Route path="/sobre" element={<Sobre />} />
     <Route path="/lista-livros" element={<ListaDeLivros />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
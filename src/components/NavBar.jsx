import React from 'react';

const NavBar = () => {
  return (
    <ul className='itens-navbar'>
      <a href="/">
        <li>Páginal Inicial</li>
      </a>
      <a href="/sobre">
        <li>Sobre</li>
      </a>
      <a href="/lista-livros">
        <li>Lista de Livros</li>
      </a>
      <a href="/cadastro">
        <li>Cadastrar</li>
      </a>
    </ul>
  )
}

export default NavBar
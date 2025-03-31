# 📚 Gerenciador de Livros

Este projeto é um gerenciador de livros desenvolvido em React, permitindo adicionar, editar e excluir livros de uma lista. Os dados são armazenados no `localStorage` para persistência entre sessões.

## 🛠 Tecnologias Utilizadas

- React.js
- React Router
- Context API
- LocalStorage
- CSS
- Vite

## 📷 Capturas de Tela

![Home](./screenshots/home.png)
![Sobre](./screenshots/sobre.png)
![Lista de Livros](./screenshots/listaDeLivros.png)
![Cadastro](./screenshots/cadastro.png)

## 🎥 Demonstração em Vídeo

[🎬 Ver vídeo demonstração](https://www.loom.com/share/b2f0c00fac34405bb194e0dc380b6a55?sid=822b503c-698a-4d6a-9e29-17291415498f)

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório

```sh
 git clone https://github.com/vitoriadalri/crud-livros.git
 cd seu-repositorio
```

### 2️⃣ Instale as dependências

```sh
 npm install
```

### 3️⃣ Inicie o servidor de desenvolvimento

```sh
 npm run dev
```

A aplicação estará disponível em `http://localhost:5173/`.

## 🔧 Funcionalidades

✅ Adicionar livros com título, autor, gênero e data de publicação.
✅ Editar detalhes de um livro já cadastrado.
✅ Excluir livros da lista.
✅ Armazenamento persistente utilizando `localStorage`.

## 📂 Estrutura do Projeto

```
/src
  ├── components
  │   ├── BookList.jsx
  │   ├── BookForm.jsx
  │   ├── EditBook.jsx
  │
  ├── contexts
  │   ├── BookContext.jsx
  │
  ├── pages
  │   ├── Home.jsx
  │   ├── Cadastro.jsx
  │   ├── EditarLivro.jsx
  │
  ├── App.jsx
  ├── main.jsx
  ├── styles.css
```

### Conclusão

Este projeto é uma aplicação que utiliza tecnologias HTML, CSS, JavaScript, Vite, React, para gerenciar um catálogo de livros. Ele permite que os usuários cadastrem novos livros, visualizem a lista de livros cadastrados e naveguem entre as páginas da aplicação.

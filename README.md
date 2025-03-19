## Nome: Vitória Dalri

Para executar este projeto:

1. Entre pasta vitoria_dalri-projeto-fase-1 no terminal:

```
cd vitoria_dalri-projeto-fase-1
```

2. Rode npm install para instalar as dependências do projeto:

```
npm install
```

3. E em seguida, npm run dev, para iniciar a execução do projeto.

```
npm run dev
```

## Introdução

Esse projeto contém uma estrutura básica de uma aplicação para um CRUD de um Reading Journal. Foi elaborado na Disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS.

## Componentes

Os componentes estão no diretório ```./src/components` e eles possuem as seguintes características:

- BookForm:
  Este componente é responsável pelo formulário de cadastro de livros. Ele permite ao usuário inserir informações como título, autor, gênero e data de publicação.

  - Usa useState para armazenar os dados do formulário.
  - Utiliza useContext para adicionar um livro ao contexto global.
  - Após a submissão, os campos são limpos e uma mensagem de sucesso é exibida.

- BookList:
  Este arquivo contém a lógica do contexto BookContext, que gerencia a lista de livros da aplicação.

  - Cria um contexto (BookContext) que armazena a lista de livros.
  - Usa useState para controlar o estado da lista de livros.
  - Expõe a função addBook, que permite adicionar novos livros ao contexto.

- NavBar:
  O componente NavBar é responsável pela navegação da aplicação.
  - Exibe links para diferentes páginas, incluindo:
  - Página Inicial
  - Página "Sobre"
  - Lista de Livros
  - Página de Cadastro
  - Usa elementos <a> para redirecionar os usuários.

## Conclusão

Este projeto é uma aplicação que utiliza tecnologias HTML, CSS, JavaScript, Vite, React, para gerenciar um catálogo de livros. Ele permite que os usuários cadastrem novos livros, visualizem a lista de livros cadastrados e naveguem entre as páginas da aplicação.

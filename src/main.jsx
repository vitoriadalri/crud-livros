import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css"
import { BookProvider } from "./components/BookList"; // Importando o Provider

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BookProvider>
      <App />
    </BookProvider>

);

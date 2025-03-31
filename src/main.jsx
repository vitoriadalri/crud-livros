import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css"
import { BookProvider } from "./contexts/BookContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BookProvider>
      <App />
    </BookProvider>

);

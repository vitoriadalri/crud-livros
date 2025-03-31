import React from 'react';
import AppRoutes from './routes/Routes';
// import { BookProvider } from './contexts/BookContext';
// import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
<>
        <NavBar/>
          <AppRoutes />
    </>
   
  );
};

export default App;

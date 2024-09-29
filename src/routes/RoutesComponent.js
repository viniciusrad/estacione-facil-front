import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login'; // Importar o componente Login
import { Home } from '../pages/home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

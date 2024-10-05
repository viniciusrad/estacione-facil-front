import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login.js'; // Importar o componente Login
import { Home } from '../pages/home';
import  FormularioVeiculo  from '../pages/veiculo/cadastro-veiculos.js';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/veiculo/cadastro" element={<FormularioVeiculo />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

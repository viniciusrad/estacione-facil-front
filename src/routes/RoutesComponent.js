import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from '../pages/login/Login.js'; // Importar o componente Login
import { Home } from '../pages/home';
import FormularioVeiculo from '../pages/veiculo/cadastro-veiculos.js';
import CadastroProprietario from '../pages/proprietario/proprietario_carro.js';
import CadastroUsuario from '../pages/usuario/cadastro-usuario.js';
import { Footer } from '../components/Footer.js';

const AppRoutesWithFooter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/veiculo/cadastro" element={<FormularioVeiculo />} />
        <Route path="/proprietario/carro" element={<CadastroProprietario />} />
        <Route path="/usuario/cadastro" element={<CadastroUsuario />} />
      </Routes>
      <Footer navigate={navigate} />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AppRoutesWithFooter />
    </Router>
  );
};

export default AppRoutes;

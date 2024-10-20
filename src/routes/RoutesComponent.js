import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from '../pages/login/Login.js'; // Importar o componente Login
import { Home } from '../pages/home';
import FormularioVeiculo from '../pages/veiculo/cadastro-veiculos.js';
import CadastroProprietario from '../pages/proprietario/proprietario_carro.js';
import CadastroUsuario from '../pages/usuario/cadastro-usuario.js';
import { Footer } from '../components/Footer.js';
import ReservaVaga from '../pages/vagas/reserva-vaga.js';
import ListaVagas from '../pages/vagas/listar-vagas.js';
import ListarVeiculos from '../pages/veiculo/listar-veiculo.js';
import HistoricoAgendamentos from '../pages/vagas/historico-agendamentos.js';
import CadastroCartao from '../pages/cartao/cadastro-cartao.js';
import MeuHistorico from '../pages/historico/meu-historico.js';
import MeusAgendamentos from '../pages/agendamentos/meus-agendamentos.js';
import ApagarConta from '../pages/usuario/apagar-conta.js';
const AppRoutesWithFooter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/veiculo/cadastro" element={<FormularioVeiculo />} />
        <Route path="/veiculo/lista" element={<ListarVeiculos />} />
        <Route path="/proprietario/carro" element={<CadastroProprietario />} />
        <Route path="/usuario/cadastro" element={<CadastroUsuario />} />
        <Route path="/usuario/apagar-conta" element={<ApagarConta />} />
        <Route path="/vagas/reservar" element={<ReservaVaga />} />
        <Route path="/vagas/listar" element={<ListaVagas />} />
        <Route path="/vagas/historico" element={<HistoricoAgendamentos />} />
        <Route path="/cartao/cadastro" element={<CadastroCartao />} />
        <Route path="/historico/meu-historico" element={<MeuHistorico />} />
        <Route path="/agendamentos/meus-agendamentos" element={<MeusAgendamentos />} />
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

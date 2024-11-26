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
import AtualizarUsuario from '../pages/usuario/atualizar-usuario.js';
import CategoriaUsuario from '../pages/usuario/categoria.js';
import CadastroUsuarioAdmin from '../pages/usuario/cadastro-usuario-admin.js';
import AprovarVagas from '../pages/vagas/aprovar-vagas.js';
import DadosBancarios from '../pages/dados-bancarios/DadosBancarios.js';
import CadastroVaga from '../pages/vagas/cadastro-vaga.js';
import DetalhesReserva from '../pages/vagas/detalhes-reserva';
import DisponibilidadeVagas from '../pages/vagas/disponibilidade.vagas.js';

const AppRoutesWithFooter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamentos/meus-agendamentos" element={<MeusAgendamentos />} />
        <Route path="/cartao/cadastro" element={<CadastroCartao />} />
        <Route path="/dados-bancarios" element={<DadosBancarios />} />
        <Route path="/detalhes-reserva" element={<DetalhesReserva />} />
        <Route path="/historico/meu-historico" element={<MeuHistorico />} />
        <Route path="/login" element={<Login />} />
        <Route path="/proprietario/carro" element={<CadastroProprietario />} />
        <Route path="/usuario/apagar-conta" element={<ApagarConta />} />
        <Route path="/usuario/atualizar" element={<AtualizarUsuario />} />
        <Route path="/usuario/cadastro" element={<CadastroUsuario />} />
        <Route path="/usuario/cadastro-admin" element={<CadastroUsuarioAdmin />} />
        <Route path="/usuario/categoria" element={<CategoriaUsuario />} />
        <Route path="/vagas/aprovar" element={<AprovarVagas />} />
        <Route path="/vagas/cadastro" element={<CadastroVaga />} />
        <Route path="/vagas/disponibilidade" element={<DisponibilidadeVagas />} />
        <Route path="/vagas/historico" element={<HistoricoAgendamentos />} />
        <Route path="/vagas/listar" element={<ListaVagas />} />
        <Route path="/vagas/reservar" element={<ReservaVaga />} />
        <Route path="/veiculo/cadastro" element={<FormularioVeiculo />} />
        <Route path="/veiculo/lista" element={<ListarVeiculos />} />
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

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { 
  Container, 
  ButtonContainer, 
  CancelButton, 
  VagasList,
  VagaItem 
} from '../../components/StyledComponents';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';

const AgendamentoItem = styled(VagaItem)`
  .data-hora {
    font-weight: bold;
    color: #4CAF50;
    font-size: 1.1em;
    margin-bottom: 5px;
  }
  
  .local {
    color: #ffffff;
  }
`;

const MeusAgendamentos = () => {
  const { user } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const endpoint = user.tipo === 'ADMIN' 
          ? 'http://localhost:3000/agendamentos'
          : `http://localhost:3000/agendamentos/cliente/${user.id}`;

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Erro ao buscar agendamentos');
        }
        const data = await response.json();
        setAgendamentos(data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgendamentos();
  }, [user]);

  const handleAgendamentoClick = (id) => {
    setAgendamentoSelecionado(id === agendamentoSelecionado ? null : id);
  };

  if (loading) {
    return (
      <Container style={{minHeight: '800px'}}>
        <LogoDiv text="Meus Agendamentos"/>
        <div style={{color: 'white', textAlign: 'center', marginTop: '20px'}}>
          Carregando agendamentos...
        </div>
      </Container>
    );
  }

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Meus Agendamentos"/>
      
      {
      agendamentos.length > 0 ? (
        <VagasList>
          {agendamentos.map(agendamento => (
            <AgendamentoItem
              key={agendamento.id}
              className={agendamento.id === agendamentoSelecionado ? 'selected' : ''}
              onClick={() => handleAgendamentoClick(agendamento.id)}
            >
              <span className="data-hora">
                {new Date(agendamento.dataInicio).toLocaleDateString()} {agendamento.tipoCobranca === 'HORA' ? " às " + agendamento.horarioInicio : 'Diária'}
              </span>
              <span className="local">{agendamento.endereco || 'Endereço não disponível'}</span>
              {/* <span>Status: {agendamento.status}</span> */}
            </AgendamentoItem>
          ))}
        </VagasList>
      ) : (
        <div style={{color: 'white', textAlign: 'center', marginTop: '20px'}}>
          Você não possui agendamentos.
        </div>
      )}

      <ButtonContainer>
        <CancelButton type="button" onClick={() => navigate('/')}>Voltar</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default MeusAgendamentos;

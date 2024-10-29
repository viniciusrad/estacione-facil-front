import React, { useState } from 'react';
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
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  
  const agendamentos = [
    {
      id: 1,
      data: '15/05/2024',
      hora: '14:30',
      local: 'Shopping Center - Vaga A1',
      status: 'Confirmado'
    },
    {
      id: 2,
      data: '18/05/2024',
      hora: '09:00',
      local: 'Centro Empresarial - Vaga B3',
      status: 'Pendente'
    },
    {
      id: 3,
      data: '20/05/2024',
      hora: '16:45',
      local: 'Estacionamento Central - Vaga C2',
      status: 'Confirmado'
    }
  ];

  const handleAgendamentoClick = (id) => {
    setAgendamentoSelecionado(id === agendamentoSelecionado ? null : id);
  };

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Meus Agendamentos"/>
      
      <VagasList>
        {agendamentos.map(agendamento => (
          <AgendamentoItem
            key={agendamento.id}
            className={agendamento.id === agendamentoSelecionado ? 'selected' : ''}
            onClick={() => handleAgendamentoClick(agendamento.id)}
          >
            <span className="data-hora">
              {agendamento.data} às {agendamento.hora}
            </span>
            <span className="local">{agendamento.local}</span>
            <span>Status: {agendamento.status}</span>
          </AgendamentoItem>
        ))}
      </VagasList>

      <ButtonContainer>
        <CancelButton type="button">Voltar</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default MeusAgendamentos;

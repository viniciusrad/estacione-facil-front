import React, { useState } from 'react';
import styled from 'styled-components';
import { LogoDiv } from '../../components/LogoDiv';
import PopUp from '../../components/MessagePopUp';
import {
    Container,
    VagasList,
    VagaItem,
    ButtonContainer,
    CancelButton,
    ConfirmButton as BaseConfirmButton
} from '../../components/StyledComponents';
import { useNavigate } from 'react-router-dom';
const StyledConfirmButton = styled(BaseConfirmButton)`
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const AgendamentoItem = styled(VagaItem)`
    .data-span {
        font-weight: bold;
    }
`;

const HistoricoAgendamentos = () => {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

    const [historicoAgendamentos, setHistoricoAgendamentos] = useState([
        { id: 1, data: '2023-05-15', vaga: 'A1', veiculo: 'ABC-1234', duracao: '2h', valor: 'R$ 20,00' },
        { id: 2, data: '2023-05-14', vaga: 'B3', veiculo: 'DEF-5678', duracao: '4h', valor: 'R$ 40,00' },
        { id: 3, data: '2023-05-13', vaga: 'C2', veiculo: 'GHI-9012', duracao: '1 dia', valor: 'R$ 50,00' },
    ]);

    const handleAgendamentoClick = (agendamentoId) => {
        setAgendamentoSelecionado(agendamentoId === agendamentoSelecionado ? null : agendamentoId);
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Histórico de Agendamentos" />

            <VagasList>
                {historicoAgendamentos.map(agendamento => (
                    <AgendamentoItem
                        key={agendamento.id}
                        className={agendamento.id === agendamentoSelecionado ? 'selected' : ''}
                        onClick={() => handleAgendamentoClick(agendamento.id)}
                    >
                        <span className="data-span">{agendamento.data}</span>
                        <span>{`Vaga: ${agendamento.vaga} | Veículo: ${agendamento.veiculo}`}</span>
                        <span>{`Duração: ${agendamento.duracao} | Valor: ${agendamento.valor}`}</span>
                    </AgendamentoItem>
                ))}
            </VagasList>

            <ButtonContainer>
                <CancelButton onClick={() => navigate('/')}>Voltar</CancelButton>
                <StyledConfirmButton 
                    className='btn-confirmar' 
                    onClick={() => setShowPopUp(true)}
                    disabled={agendamentoSelecionado === null}
                >
                    Detalhes
                </StyledConfirmButton>
            </ButtonContainer>

            {showPopUp && (
                <PopUp
                    title="Detalhes do Agendamento"
                    body={`Detalhes do agendamento ${agendamentoSelecionado}`}
                    onCancel={() => setShowPopUp(false)}
                    onConfirm={() => {
                        // Lógica para mostrar mais detalhes do agendamento
                        setShowPopUp(false);
                    }}
                />
            )}
        </Container>
    );
};

export default HistoricoAgendamentos;

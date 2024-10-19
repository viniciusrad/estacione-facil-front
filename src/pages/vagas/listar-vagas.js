import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
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

const StyledConfirmButton = styled(BaseConfirmButton)`
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const ListaVagas = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    const [vagaSelecionada, setVagaSelecionada] = useState(null);
    const [vagasDisponiveis, setVagasDisponiveis] = useState([
        { id: 1, local: 'Estacionamento A', tipo: 'Coberta', endereco: 'Rua A, 123' },
        { id: 2, local: 'Estacionamento B', tipo: 'Descoberta', endereco: 'Rua B, 456' },
        { id: 3, local: 'Estacionamento C', tipo: 'Coberta', endereco: 'Rua C, 789' },
    ]);

    const handleVagaClick = (vagaId) => {
        setVagaSelecionada(vagaId === vagaSelecionada ? null : vagaId);
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Vagas Disponíveis" />

            <VagasList>
                {vagasDisponiveis.map(vaga => (
                    <VagaItem
                        key={vaga.id}
                        className={vaga.id === vagaSelecionada ? 'selected' : ''}
                        onClick={() => handleVagaClick(vaga.id)}
                    >
                        <span>{vaga.endereco}</span>
                        <span className="status-span">{vaga.tipo}</span>
                    </VagaItem>
                ))}
            </VagasList>

            <ButtonContainer>
                <CancelButton>Cancelar</CancelButton>
                <StyledConfirmButton 
                    className='btn-confirmar' 
                    onClick={() => setShowPopUp(true)}
                    disabled={vagaSelecionada === null}
                >
                    Confirmar
                </StyledConfirmButton>
            </ButtonContainer>

            {showPopUp && (
                <PopUp
                    title="Atenção"
                    body= {`Deseja reservar a vaga ${vagaSelecionada}?`}
                    onCancel={() => setShowPopUp(false)}
                    onConfirm={() => {
                        // Lógica para confirmar a ação
                        setShowPopUp(false);
                    }}
                />
            )}
        </Container>

    );
};


export default ListaVagas;

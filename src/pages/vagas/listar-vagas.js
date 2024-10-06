import React, { useState } from 'react';
import styled from 'styled-components';
import './reserva-vaga.css';
import { LogoDiv } from '../../components/LogoDiv';
import PopUp from '../../components/MessagePopUp';


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
                <ConfirmarButton className='btn-confirmar' onClick={() => setShowPopUp(true)}>Confirmar</ConfirmarButton>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #486579;
  min-height: 100vh;
  box-sizing: border-box;
`;

const VagasList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const VagaItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1D4189;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;

  &.selected {
    background-color: #2E18B9;
  }

  .status-span {
    font-size:9px;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 25px;
    background-color: #486579;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 25px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 45%;
`;

const CancelButton = styled(Button)`
  background-color: lightgray;
  color: black;
  font-weight: bold;
`;

const ConfirmarButton = styled(Button)`
  background-color: #2E18B9;
`;

export default ListaVagas;

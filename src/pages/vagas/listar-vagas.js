import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import PopUp from '../../components/MessagePopUp';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);

    const [vagaSelecionada, setVagaSelecionada] = useState(null);
    const [vagasDisponiveis, setVagasDisponiveis] = useState([]);

    const handleVagaClick = (vagaId) => {
        setVagaSelecionada(vagaId === vagaSelecionada ? null : vagaId);

        navigate('/detalhes-reserva', { state: { vaga: vagasDisponiveis.find(vaga => vaga.id === vagaId) } });
    };

    const buscarVagas = async () => {
        const response = await fetch('http://localhost:3000/vagas');
        const data = await response.json();
        setVagasDisponiveis(data);
    };

    useEffect(() => {
        buscarVagas();
    }, []);

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Vagas Disponíveis" />

            {vagasDisponiveis.length === 0 && (
                <p>Nenhuma vaga disponível no momento.</p>
            )}
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

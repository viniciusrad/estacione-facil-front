import React, { useState } from 'react';
import styled from 'styled-components';
// import './listar-veiculos.css';
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

// Estiliza o botão de confirmação para ficar desabilitado quando não houver seleção
const StyledConfirmButton = styled(BaseConfirmButton)`
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

// Cria um novo componente estilizado para os itens de veículo, baseado no VagaItem
const VeiculoItem = styled(VagaItem)`
    .placa-span {
        font-weight: bold;
    }
`;

const ListarVeiculos = () => {
    // Estados para controlar o popup e o veículo selecionado
    const [showPopUp, setShowPopUp] = useState(false);
    const [veiculoSelecionado, setVeiculoSelecionado] = useState(null);

    // Lista de veículos cadastrados (simulada)
    const [veiculosCadastrados, setVeiculosCadastrados] = useState([
        { id: 1, placa: 'ABC-1234', marca: 'Toyota', modelo: 'Corolla', ano: 2020 },
        { id: 2, placa: 'DEF-5678', marca: 'Honda', modelo: 'Civic', ano: 2019 },
        { id: 3, placa: 'GHI-9012', marca: 'Volkswagen', modelo: 'Golf', ano: 2021 },
    ]);

    // Função para lidar com o clique em um veículo
    const handleVeiculoClick = (veiculoId) => {
        setVeiculoSelecionado(veiculoId === veiculoSelecionado ? null : veiculoId);
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Veículos Cadastrados" />

            <VagasList>
                {veiculosCadastrados.map(veiculo => (
                    <VeiculoItem
                        key={veiculo.id}
                        className={veiculo.id === veiculoSelecionado ? 'selected' : ''}
                        onClick={() => handleVeiculoClick(veiculo.id)}
                    >
                        <span className="placa-span">{veiculo.placa}</span>
                        <span>{`${veiculo.marca} ${veiculo.modelo} (${veiculo.ano})`}</span>
                    </VeiculoItem>
                ))}
            </VagasList>

            <ButtonContainer>
                <CancelButton>Cancelar</CancelButton>
                <StyledConfirmButton 
                    className='btn-confirmar' 
                    onClick={() => setShowPopUp(true)}
                    disabled={veiculoSelecionado === null}
                >
                    Selecionar
                </StyledConfirmButton>
            </ButtonContainer>

            {showPopUp && (
                <PopUp
                    title="Atenção"
                    body={`Deseja selecionar o veículo ${veiculoSelecionado}?`}
                    onCancel={() => setShowPopUp(false)}
                    onConfirm={() => {
                        // Lógica para confirmar a seleção do veículo
                        setShowPopUp(false);
                    }}
                />
            )}
        </Container>
    );
};

export default ListarVeiculos;

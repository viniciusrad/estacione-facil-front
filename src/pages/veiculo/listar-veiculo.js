import React, { useState, useEffect, useContext } from 'react';
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
import { UsuarioContext } from '../../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

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
    const { user } = useContext(UsuarioContext);
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);
    const [veiculoSelecionado, setVeiculoSelecionado] = useState(null);
    const [veiculosCadastrados, setVeiculosCadastrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVeiculos = async () => {
            try {
                const response = await fetch(`http://localhost:3000/vehicles/proprietario/${user.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                if (!response.ok) {
                    throw new Error('Erro ao carregar veículos');
                }
                const data = await response.json();
                setVeiculosCadastrados(data);
            } catch (err) {
                console.error('Erro detalhado:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user && user.id) {
            fetchVeiculos();
        }
    }, [user]);

    const handleVeiculoClick = (veiculo) => {
        setVeiculoSelecionado(veiculo === veiculoSelecionado ? null : veiculo);
    };

    if (loading) return <Container><p>Carregando...</p></Container>;
    if (error) return <Container><p>Erro: {error}</p></Container>;

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Veículos Cadastrados" />

            <VagasList>
                {veiculosCadastrados.map(veiculo => (
                    <VeiculoItem
                        key={veiculo.licensePlate}
                        className={veiculo === veiculoSelecionado ? 'selected' : ''}
                        onClick={() => handleVeiculoClick(veiculo)}
                    >
                        <span className="placa-span">{veiculo.licensePlate}</span>
                        <span>{`${veiculo.brand} ${veiculo.model} (${veiculo.year})`}</span>
                    </VeiculoItem>
                ))}
            </VagasList>

            <ButtonContainer>
                <CancelButton onClick={() => navigate('/')}>Cancelar</CancelButton>
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
                    body={`Deseja selecionar o veículo ${veiculoSelecionado?.licensePlate}?`}
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

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import PopUp from '../../components/MessagePopUp';
import { UsuarioContext } from '../../context/UsuarioContext';
import {
    Container,
    Input,
    ButtonContainer,
    CancelButton,
    FormGroup,
    CadastrarButton,
    VagasList,
    VagaItem
} from '../../components/StyledComponents';

const DisponibilidadeVagas = () => {
    const navigate = useNavigate();
    const { user } = useContext(UsuarioContext);
    const [vagaSelecionada, setVagaSelecionada] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [vagas, setVagas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const buscarVagas = async () => {
        if (!user?.id) {
            setErro('Usuário não autenticado');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/vagas/user/${user.id}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar vagas');
            }
            const data = await response.json();
            
            if (data.length === 0) {
                setErro('Nenhuma vaga encontrada para este usuário');
            }
            
            setVagas(data);
        } catch (error) {
            console.error('Erro ao buscar vagas:', error);
            setErro('Erro ao carregar as vagas. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarVagas();
    }, [user?.id]);

    const handleVagaClick = (vaga) => {
        setVagaSelecionada(vaga.id === vagaSelecionada?.id ? null : vaga);
    };

    const handleAlterarStatus = async () => {
        if (!vagaSelecionada) {
            alert('Selecione uma vaga primeiro');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/vagas/status/${vagaSelecionada.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                setShowPopUp(true);
                await buscarVagas(); // Recarrega a lista de vagas
            } else {
                const error = await response.json();
                alert(`Erro ao alterar status: ${error.message}`);
            }
        } catch (error) {
            console.error('Erro ao alterar status:', error);
            alert('Erro ao alterar status. Por favor, tente novamente.');
        }
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Disponibilidade de Vagas" />
            
            {loading && <p style={{color: 'white'}}>Carregando vagas...</p>}
            {erro && <p style={{color: 'red'}}>{erro}</p>}
            
            {vagas.length > 0 ? (
                <VagasList>
                    {vagas.map(vaga => (
                        <VagaItem
                            key={vaga.id}
                            className={vaga.id === vagaSelecionada?.id ? 'selected' : ''}
                            onClick={() => handleVagaClick(vaga)}
                        >
                            <span>{vaga.endereco}</span>
                            <span>{vaga.status}</span>
                            <span className="status-span">{vaga.tipoVaga}</span>
                        </VagaItem>
                    ))}
                </VagasList>
            ) : !loading && !erro && (
                <p style={{color: 'white'}}>
                    Você ainda não possui vagas cadastradas.{' '}
                    <span 
                        style={{color: '#2C10CA', cursor: 'pointer', textDecoration: 'underline'}}
                        onClick={() => navigate('/vagas/cadastrar')}
                    >
                        Cadastrar nova vaga
                    </span>
                </p>
            )}

            {vagaSelecionada && (
                <div style={styles.vagaInfo}>
                    <h3>Informações da Vaga</h3>
                    <p><strong>Tipo:</strong> {vagaSelecionada.tipoVaga}</p>
                    <p><strong>Endereço:</strong> {vagaSelecionada.endereco}</p>
                    <p><strong>Status Atual:</strong> {vagaSelecionada.status}</p>
                    <p><strong>Preço:</strong> R$ {vagaSelecionada.tipoContratacao === 'hora' ? 
                        vagaSelecionada.precoHora : vagaSelecionada.precoDiaria} 
                        por {vagaSelecionada.tipoContratacao}</p>
                    
                    <ButtonContainer>
                        <CancelButton type="button" onClick={() => navigate('/')}>
                            Cancelar
                        </CancelButton>
                        <CadastrarButton type="button" onClick={handleAlterarStatus}>
                            Alterar Status
                        </CadastrarButton>
                    </ButtonContainer>
                </div>
            )}

            {showPopUp && (
                <PopUp
                    title="Sucesso"
                    body="Status da vaga atualizado com sucesso!"
                    onCancel={() => setShowPopUp(false)}
                    onConfirm={() => {
                        setShowPopUp(false);
                    }}
                />
            )}
        </Container>
    );
};

const styles = {
    vagaInfo: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        color: 'white',
        width: '90%',
        maxWidth: '400px'
    },
    form: {
        width: '90%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    input: {
        marginBottom: '15px'
    }
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default DisponibilidadeVagas;

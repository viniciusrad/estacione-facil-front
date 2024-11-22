import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import {
    Container,
    Input,
    ButtonContainer,
    CancelButton,
    Select,
    FormGroup,
    CadastrarButton,
} from '../../components/StyledComponents';
import PopUp from '../../components/MessagePopUp';

const AprovarVagas = () => {
    const navigate = useNavigate();
    const [vagasFiltradas, setVagasFiltradas] = useState([]);
    const [vagasAlteradas, setVagasAlteradas] = useState(new Map());
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');
    const [popUpError, setPopUpError] = useState(false);

    const buscarVagas = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/vagas/indisponiveis');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            setVagasFiltradas(data);
            setVagasAlteradas(new Map());
            setLoading(false);
        } catch (error) {
            setErro('Erro ao carregar vagas');
            setLoading(false);
            console.error('Erro:', error);
        }
    };

    useEffect(() => {
        buscarVagas();
    }, []);

    const handleVagaClick = (vaga) => {
        setVagasAlteradas(prevState => {
            const novoMap = new Map(prevState);
            if (novoMap.has(vaga.id)) {
                novoMap.delete(vaga.id);
            } else {
                novoMap.set(vaga.id, {
                    ...vaga,
                    status: vaga.status === 'indisponivel' ? 'disponivel' : 'indisponivel'
                });
            }
            return novoMap;
        });
    };

    const handleSalvar = async (e) => {
        e.preventDefault();
        if (vagasAlteradas.size === 0) return;

        try {
            setLoading(true);
            const promises = Array.from(vagasAlteradas.values()).map(vaga => 
                fetch(`http://localhost:3000/vagas/status/${vaga.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: vaga.status })
                })
            );

            const results = await Promise.all(promises);
            const hasError = results.some(response => !response.ok);

            if (hasError) {
                throw new Error('Erro ao atualizar algumas vagas');
            }

            setPopUpMessage('Status das vagas atualizados com sucesso!');
            setPopUpError(false);
            await buscarVagas();
        } catch (error) {
            setPopUpMessage(error.message);
            setPopUpError(true);
        } finally {
            setShowPopUp(true);
            setLoading(false);
        }
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Aprovar Vagas" />
            <form onSubmit={handleSalvar}>
                {loading && <p style={{color: 'white'}}>Carregando vagas...</p>}
                {erro && <p style={{color: 'red'}}>{erro}</p>}

                <div className="lista-vagas">
                    {vagasFiltradas.map(vaga => (
                        <div 
                            key={vaga.id}
                            className={`vaga-card ${vagasAlteradas.has(vaga.id) ? 'selecionada' : ''}`}
                            onClick={() => handleVagaClick(vaga)}
                            style={{
                                ...styles.vagaCard,
                                backgroundColor: vagasAlteradas.has(vaga.id) ? 'rgba(46, 24, 185, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="vaga-info" style={styles.vagaInfo}>
                                <h3>{vaga.endereco}</h3>
                                <p><strong>Tipo:</strong> {vaga.tipoVaga}</p>
                                <p><strong>Contratação:</strong> {vaga.tipoContratacao}</p>
                                <p><strong>Descrição:</strong> {vaga.descricao}</p>
                                <p><strong>Status Atual:</strong> {vaga.status}</p>
                                {vagasAlteradas.has(vaga.id) && (
                                    <p style={{color: '#4CAF50'}}>
                                        <strong>Novo Status:</strong> {vagasAlteradas.get(vaga.id).status}
                                    </p>
                                )}
                                {vaga.tipoContratacao === 'hora' ? (
                                    <p><strong>Preço/Hora:</strong> R$ {vaga.precoHora}</p>
                                ) : (
                                    <p><strong>Preço/Diária:</strong> R$ {vaga.precoDiaria}</p>
                                )}
                            </div>
                            <div className="vaga-fotos" style={styles.fotosContainer}>
                                {vaga.fotos.map((foto, index) => (
                                    <img 
                                        key={index}
                                        src={foto}
                                        alt={`Foto ${index + 1}`}
                                        style={styles.foto}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>

                <ButtonContainer>
                    <CancelButton type="button" onClick={() => navigate('/')}>
                        Cancelar
                    </CancelButton>
                    <CadastrarButton 
                        type="submit" 
                        disabled={vagasAlteradas.size === 0}
                    >
                        Salvar Alterações
                    </CadastrarButton>
                </ButtonContainer>
            </form>

            {showPopUp && (
                <PopUp
                    title={popUpError ? "Erro" : "Sucesso"}
                    body={popUpMessage}
                    onCancel={() => setShowPopUp(false)}
                    onlyWarning={true}
                />
            )}
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

const styles = {
    vagaCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    vagaInfo: {
        color: 'white',
        marginBottom: '15px'
    },
    fotosContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center'
    },
    foto: {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '5px'
    }
};

export default AprovarVagas;

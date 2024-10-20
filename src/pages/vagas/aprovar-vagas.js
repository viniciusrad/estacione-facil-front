import React, { useEffect, useState } from 'react';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, SalvarButton, Select } from '../../components/StyledComponents';
import './aprovar-vaga.css';

const AprovarVagas = () => {
    const [vagaSelecionada, setVagaSelecionada] = useState('');
    const [nomeVaga, setNomeVaga] = useState('');
    const [status, setStatus] = useState('');
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

    const [vagasFiltradas, setVagasFiltradas] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    const vagas = [
        { 
            id: 1, 
            nome: "Vaga A1 - Centro", 
            proprietario: "João Silva",
            fotos: [
                "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            descricao: "Vaga ampla no centro da cidade, próxima a comércios e restaurantes."
        },
        { 
            id: 2, 
            nome: "Vaga B2 - Shopping",
            proprietario: "Maria Santos",
            fotos: [
                "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            descricao: "Vaga coberta em shopping center, com segurança 24 horas."
        },
        { 
            id: 3, 
            nome: "Vaga C3 - Parque",
            proprietario: "Carlos Oliveira",
            fotos: [
                "https://images.unsplash.com/photo-1621950374496-b6f7b8d00b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            ],
            descricao: "Vaga ao ar livre próxima ao parque municipal, ideal para passeios de fim de semana."
        },
        { 
            id: 4, 
            nome: "Vaga D4 - Estádio",
            proprietario: "Ana Rodrigues",
            fotos: [
                "https://images.unsplash.com/photo-1587503142464-1391dbf45a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1609520778763-7937733a7a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            descricao: "Vaga próxima ao estádio, perfeita para dias de jogos e eventos esportivos."
        },
        { 
            id: 5, 
            nome: "Vaga E5 - Aeroporto",
            proprietario: "Pedro Mendes",
            fotos: [
                "https://images.unsplash.com/photo-1621950374496-b6f7b8d00b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1609520778763-7937733a7a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            descricao: "Vaga segura e conveniente no estacionamento do aeroporto, ideal para viagens longas."
        }
    ];

    const filtrarVagas = (texto) => {
        const filtradas = vagas.filter(vaga =>
            vaga.nome.toLowerCase().includes(texto.toLowerCase())
        );
        setVagasFiltradas(filtradas);
    };

    const handleVagaSelecionada = (event, id_vaga) => {
        event.preventDefault();
        setVagaSelecionada(id_vaga);
        setNomeVaga(event.target.textContent);
    };

    useEffect(() => {
        setVagasFiltradas(vagas);
    }, []);


    const handleDetalhar = (e) => {
        e.preventDefault();
        if (vagaSelecionada) {
            setMostrarDetalhes(true);
        }
    };

    return (
        <Container style={{ minHeight: '800px' }}>
            <form>
                <LogoDiv text="Aprovar Vagas" />
                <label style={stylePersonal.label}>Selecionar Vaga</label>

                <Input
                    type="text"
                    placeholder="Pesquisar vaga"
                    value={pesquisa}
                    onChange={(e) => {
                        setPesquisa(e.target.value);
                        filtrarVagas(e.target.value);
                    }}
                />
                <div className="lista-vagas">
                    {vagasFiltradas.map(vaga => (
                        <button
                            key={vaga.id}
                            onClick={(event) => handleVagaSelecionada(event, vaga.id)}
                            className={`botao-vaga ${vagaSelecionada === vaga.id ? 'selecionada' : ''}`}
                        >
                            {vaga.nome}
                        </button>
                    ))}
                </div>
                <label style={stylePersonal.label}>Status</label>
                <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Selecione o status</option>
                    <option value="aprovada">Aprovada</option>
                    <option value="reprovada">Reprovada</option>
                </Select>
                {vagaSelecionada && <p>Você está prestes a aprovar a vaga: <br/> <strong>{nomeVaga}</strong></p>}
                <ButtonContainer>
                    <CancelButton>Cancelar</CancelButton>
                    <SalvarButton className='btn-salvar' onClick={(e) => handleDetalhar(e)}>Detalhar</SalvarButton>
                </ButtonContainer>

                {mostrarDetalhes && vagaSelecionada && (
                    <Container style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', minHeight: 'fit-content', marginBottom: '60px' }}>
                        <h2>Detalhes da Vaga</h2>
                        {vagas.filter(vaga => vaga.id === vagaSelecionada).map(vaga => (
                            <div key={vaga.id}>
                                <h3>{vaga.nome}</h3>
                                <p><strong>Proprietário:</strong> {vaga.proprietario || 'Não informado'}</p>
                                <p><strong>Descrição:</strong> {vaga.descricao || 'Sem descrição'}</p>
                                {vaga.fotos && vaga.fotos.length > 0 && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {vaga.fotos.map((foto, index) => (
                                            <img key={index} src={foto} alt={`Foto ${index + 1}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Container>
                )}
            </form>
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default AprovarVagas;

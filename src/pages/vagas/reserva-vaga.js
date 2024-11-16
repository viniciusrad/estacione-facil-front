import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import {
    Container,
    Input,
    ButtonContainer,
    CancelButton,
    RadioContainer,
    RadioInput,
    RadioLabel,
    RadioGroup,
    FormGroup,
    BuscarButton,
} from '../../components/StyledComponents';
import { VagasContext } from '../../context/VagasContext';

const ReservaVaga = () => {
    const [tipoVaga, setTipoVaga] = useState('ambas');
    const [tipoContratacao, setTipoContratacao] = useState('ambas');
    const [precoHora, setPrecoHora] = useState('');
    const [horaChegadaHora, setHoraChegadaHora] = useState('');
    const [horaSaidaHora, setHoraSaidaHora] = useState('');
    const [diaHora, setDiaHora] = useState('');
    const [precoDiaria, setPrecoDiaria] = useState('');
    const [diaDiaria, setDiaDiaria] = useState('');
    const [horaChegadaDiaria, setHoraChegadaDiaria] = useState('');
    const [quantidadeDiarias, setQuantidadeDiarias] = useState('');
    const [buscarVaga, setBuscarVaga] = useState('');
    const [vagas, setVagas] = useState([]);
    const [vagasFiltradas, setVagasFiltradas] = useState([]);

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const response = await fetch('http://localhost:3000/vagas');
                if (!response.ok) {
                    throw new Error('Erro ao buscar vagas');
                }
                const data = await response.json();
                setVagas(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVagas();
    }, []);

    const handleBuscarVagas = (e) => {
        e.preventDefault();
        const filtradas = vagas.filter(vaga => {
            const matchTipo = tipoVaga === 'ambas' ? true : vaga.tipoVaga === tipoVaga;
            const matchBusca = buscarVaga === '' ||
                vaga.descricao.toLowerCase().includes(buscarVaga.toLowerCase());

            let matchContratacao;
            if (tipoContratacao === 'ambas') {
                matchContratacao = true;
            } else {
                matchContratacao = vaga.tipoContratacao === tipoContratacao;
            }

            return matchTipo && matchBusca && matchContratacao;
        });
        setVagasFiltradas(filtradas);
    };
    return (
        <Container style={{ minHeight: '800px' }}>
            <LogoDiv text="Reserva de Vaga" />
            <form onSubmit={handleBuscarVagas}>
                <label style={stylePersonal.label}>Tipo de Vaga</label>
                <RadioContainer>
                    <RadioInput
                        type="radio"
                        id="ambas"
                        value="ambas"
                        checked={tipoVaga === 'ambas'}
                        onChange={(e) => setTipoVaga(e.target.value)}
                    />
                    <RadioLabel htmlFor="ambas">Ambas</RadioLabel>
                    <RadioInput
                        type="radio"
                        id="coberta"
                        value="coberta"
                        checked={tipoVaga === 'coberta'}
                        onChange={(e) => setTipoVaga(e.target.value)}
                    />
                    <RadioLabel htmlFor="coberta">Vaga Coberta</RadioLabel>
                    <RadioInput
                        type="radio"
                        id="descoberta"
                        value="descoberta"
                        checked={tipoVaga === 'descoberta'}
                        onChange={(e) => setTipoVaga(e.target.value)}
                    />
                    <RadioLabel htmlFor="descoberta">Vaga Descoberta</RadioLabel>
                </RadioContainer>
                <label style={stylePersonal.label}>Tipo de Contratação</label>

                <RadioGroup>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="ambas"
                            checked={tipoContratacao === 'ambas'}
                            onChange={(e) => setTipoContratacao(e.target.value)}
                        />
                        Ambas
                    </RadioLabel>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="hora"
                            checked={tipoContratacao === 'hora'}
                            onChange={(e) => setTipoContratacao(e.target.value)}
                        />
                        por Hora
                    </RadioLabel>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="diaria"
                            checked={tipoContratacao === 'diaria'}
                            onChange={(e) => setTipoContratacao(e.target.value)}
                        />
                        por Diária
                    </RadioLabel>
                </RadioGroup>
                {tipoContratacao === 'hora' && (
                    <FormGroup>
                        <h3>Contratação por Hora</h3>
                        <Input
                            placeholder="Preço por hora"
                            value={precoHora}
                            onChange={(e) => setPrecoHora(e.target.value)}
                        />
                        <Input
                            type="time"
                            placeholder="Hora de chegada"
                            value={horaChegadaHora}
                            onChange={(e) => setHoraChegadaHora(e.target.value)}
                        />
                        <Input
                            type="time"
                            placeholder="Hora de saída"
                            value={horaSaidaHora}
                            onChange={(e) => setHoraSaidaHora(e.target.value)}
                        />
                        <Input
                            type="date"
                            placeholder="Dia"
                            value={diaHora}
                            onChange={(e) => setDiaHora(e.target.value)}
                        />
                    </FormGroup>
                )}
                {tipoContratacao === 'diaria' && (
                    <FormGroup>
                        <h3>Contratação por Diária</h3>
                        <Input
                            style={{ maxWidth: '80%' }}
                            placeholder="Preço máximo da diária"
                            value={precoDiaria}
                            onChange={(e) => setPrecoDiaria(e.target.value)}
                        />
                        <Input
                            style={{ maxWidth: '80%' }}
                            type="date"
                            placeholder="Dia"
                            value={diaDiaria}
                            onChange={(e) => setDiaDiaria(e.target.value)}
                        />
                        <Input
                            style={{ maxWidth: '80%' }}
                            type="time"
                            placeholder="Hora de chegada"
                            value={horaChegadaDiaria}
                            onChange={(e) => setHoraChegadaDiaria(e.target.value)}
                        />
                        <Input
                            style={{ maxWidth: '80%' }}
                            placeholder="Quantidade de diárias"
                            value={quantidadeDiarias}
                            onChange={(e) => setQuantidadeDiarias(e.target.value)}
                        />
                    </FormGroup>
                )}
                <Input
                    placeholder="Buscar vaga"
                    value={buscarVaga}
                    style={{ maxWidth: '90%' }}
                    onChange={(e) => setBuscarVaga(e.target.value)}
                />
                <BuscarButton type="submit" className='btn-buscar'>Buscar</BuscarButton>
            </form>

            {/* Nova seção para exibir as vagas */}

            
            {vagasFiltradas.length > 0 ? (
                <div style={stylePersonal.listaVagas}>
                    <h3 style={stylePersonal.tituloVagas}>Vagas Disponíveis</h3>
                    {vagasFiltradas.map((vaga, index) => (
                        <div key={index} style={stylePersonal.vagaItem}>
                            <div style={stylePersonal.fotosContainer}>
                                {vaga.fotos && vaga.fotos.length > 0 ? (
                                    vaga.fotos.map((foto, idx) => (
                                        <img
                                            key={idx}
                                            src={foto}
                                            alt={`Vaga ${index + 1} - Foto ${idx + 1}`}
                                            style={stylePersonal.foto}
                                        />
                                    ))
                                ) : (
                                    <img
                                        src="caminho/para/imagem-padrao.jpg"
                                        alt="Imagem padrão"
                                        style={stylePersonal.foto}
                                    />
                                )}
                            </div>
                            <div style={stylePersonal.infoContainer}>
                                <h4 style={stylePersonal.tituloVaga}>
                                    Vaga {vaga.tipoVaga.charAt(0).toUpperCase() + vaga.tipoVaga.slice(1)}
                                </h4>
                                <p><strong>Tipo de Contratação:</strong> {vaga.tipoContratacao === 'hora' ? 'Por Hora' : 'Por Diária'}</p>
                                <p><strong>Preço:</strong> R$ {vaga.tipoContratacao === 'hora' ? vaga.precoHora : vaga.precoDiaria}</p>
                                <p><strong>Endereço:</strong> {vaga.endereco}</p>
                                <p><strong>Descrição:</strong> {vaga.descricao}</p>
                                <p><strong>Status:</strong> {vaga.status.charAt(0).toUpperCase() + vaga.status.slice(1)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={stylePersonal.listaVagas}>
                    <h3 style={stylePersonal.tituloVagas}>Nenhuma vaga encontrada</h3>
                </div>
            )}
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' },
    listaVagas: {
        marginTop: '20px',
        width: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 10px'
    },
    tituloVagas: {
        fontSize: '1.5em',
        marginBottom: '20px',
        textAlign: 'center'
    },
    vagaItem: {
        width: '90%',
        maxWidth: '400px',
        borderRadius: '15px',
        padding: '15px',
        margin: '10px 0',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    vagaItemHover: {
        transform: 'scale(1.02)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
    fotosContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '15px',
        overflowX: 'auto',
        width: '100%',
        justifyContent: 'center'
    },
    foto: {
        width: '100%',
        maxWidth: '150px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    infoContainer: {
        width: '100%',
        textAlign: 'left',
    },
    tituloVaga: {
        fontSize: '1.2em',
        marginBottom: '10px',
        textAlign: 'center'
    },
    '@media (max-width: 600px)': {
        vagaItem: {
            padding: '10px',
        },
        foto: {
            maxWidth: '120px',
            height: '80px',
        },
        tituloVagas: {
            fontSize: '1.2em',
        },
        tituloVaga: {
            fontSize: '1em',
        },
    }
};

export default ReservaVaga;

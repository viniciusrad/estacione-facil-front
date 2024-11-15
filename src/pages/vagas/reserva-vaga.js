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
    const [tipoContratacao, setTipoContratacao] = useState('hora');
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
            const matchContratacao = tipoContratacao === 'hora' ? vaga.tipoContratacao === 'hora' : vaga.tipoContratacao === 'diaria';
            
            // Adicionando um log para verificar os valores
            // console.log(`Filtrando vaga: ${vaga.descricao}, matchTipo: ${matchTipo}, matchBusca: ${matchBusca}, matchContratacao: ${matchContratacao}`);
            
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
                <RadioGroup>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="hora"
                            checked={tipoContratacao === 'hora'}
                            onChange={(e) => setTipoContratacao(e.target.value)}
                        />
                        Contratação por Hora
                    </RadioLabel>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="diaria"
                            checked={tipoContratacao === 'diaria'}
                            onChange={(e) => setTipoContratacao(e.target.value)}
                        />
                        Contratação por Diária
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
                    <h3>Vagas Disponíveis</h3>
                    {vagasFiltradas.map((vaga, index) => (
                        <div key={index} style={stylePersonal.vagaItem}>
                            <h4>Vaga {vaga.tipoVaga}</h4>
                            <p>Tipo: {vaga.tipoContratacao}</p>
                            <p>Preço: R$ {vaga.tipoContratacao === 'hora' ? vaga.precoHora : vaga.precoDiaria}</p>
                            <p>{vaga.descricao}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={stylePersonal.listaVagas}>
                    <h3>Nenhuma vaga encontrada</h3>
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
        color: 'white'
    },
    vagaItem: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        margin: '10px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
};

export default ReservaVaga;

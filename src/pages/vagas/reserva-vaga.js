import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import {
    Container,
    Input,
    ButtonContainer,
    CancelButton,
    Select,
    RadioContainer,
    RadioInput,
    RadioLabel,
    RadioGroup,
    FormGroup,
    BuscarButton,
} from '../../components/StyledComponents';

// Nota: Os seguintes componentes não foram encontrados no arquivo StyledComponents:
// - RadioContainer
// - RadioInput
// - RadioLabel




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

    return (
        <Container style={{ minHeight: '800px' }}>
            <form action="">
                <LogoDiv text="Reserva de Vaga" />
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
                            style={{ margin: '0.3rem' }}
                            placeholder="Preço por hora"
                            value={precoHora}
                            onChange={(e) => setPrecoHora(e.target.value)}
                        />
                        <Input
                            style={{ margin: '0.3rem' }}
                            type="time"
                            placeholder="Hora de chegada"
                            value={horaChegadaHora}
                            onChange={(e) => setHoraChegadaHora(e.target.value)}
                        />
                        <Input
                            style={{ margin: '0.3rem' }}
                            type="time"
                            placeholder="Hora de saída"
                            value={horaSaidaHora}
                            onChange={(e) => setHoraSaidaHora(e.target.value)}
                        />
                        <Input
                            style={{ margin: '0.3rem' }}
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
                            style={{ margin: '0.3rem' }}
                            placeholder="Preço máximo da diária"
                            value={precoDiaria}
                            onChange={(e) => setPrecoDiaria(e.target.value)}
                        />
                        <Input
                            style={{ margin: '0.3rem' }}
                            type="date"
                            placeholder="Dia"
                            value={diaDiaria}
                            onChange={(e) => setDiaDiaria(e.target.value)}
                        />
                        <Input
                            style={{ margin: '0.3rem' }}
                            type="time"
                            placeholder="Hora de chegada"
                            value={horaChegadaDiaria}
                            onChange={(e) => setHoraChegadaDiaria(e.target.value)}
                        />
                        <Input
                            style={{ margin: '0.3rem' }}
                            placeholder="Quantidade de diárias"
                            value={quantidadeDiarias}
                            onChange={(e) => setQuantidadeDiarias(e.target.value)}
                        />
                    </FormGroup>
                )}
                <Input
                    placeholder="Buscar vaga"
                    value={buscarVaga}
                    onChange={(e) => setBuscarVaga(e.target.value)}
                />
                <BuscarButton className='btn-buscar'>Buscar</BuscarButton>
            </form >
        </Container>
    );
};

const stylePersonal = {
    label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};



export default ReservaVaga;
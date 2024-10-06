import React, { useState } from 'react';
import styled from 'styled-components';
import './reserva-vaga.css';
import { LogoDiv } from '../../components/LogoDiv';

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
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Reserva de Vaga"/>
      
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
            placeholder="Preço máximo da diária"
            value={precoDiaria}
            onChange={(e) => setPrecoDiaria(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Dia"
            value={diaDiaria}
            onChange={(e) => setDiaDiaria(e.target.value)}
          />
          <Input
            type="time"
            placeholder="Hora de chegada"
            value={horaChegadaDiaria}
            onChange={(e) => setHoraChegadaDiaria(e.target.value)}
          />
          <Input
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
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #486579;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Input = styled.input`
  background-color: #1D4189;
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1D4189;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${RadioInput}:checked + & {
    background-color: #2E18B9;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  h3 {
    color: white;
    margin-bottom: 10px;
  }
`;

const BuscarButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  background-color: #2E18B9;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  background-color: #1D4189;
  border-radius: 25px;
  padding: 10px;
`;

export default ReservaVaga;
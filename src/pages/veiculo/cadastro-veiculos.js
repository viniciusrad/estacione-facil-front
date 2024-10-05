import React, { useState } from 'react';
import styled from 'styled-components';
import './cadastro-veiculo.css';
import { LogoDiv } from '../../components/LogoDiv';

const CadastroVeiculo = () => {
  const [placa, setPlaca] = useState('');
  const [renavam, setRenavam] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Cadastro de Veículo"/>
      
      <label style={stylePersonal.label}>Placa</label>
      <Input 
        placeholder="Placa do veículo"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <label style={stylePersonal.label}>RENAVAN</label>
      <Input
        placeholder="RENAVAM do veículo"
        value={renavam}
        onChange={(e) => setRenavam(e.target.value)}
      />
      <label style={stylePersonal.label}>Marca</label>
      <Input
        placeholder="Marca do veículo"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
      <label style={stylePersonal.label}>Modelo</label>
      <Input
        placeholder="Modelo do veículo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <label style={stylePersonal.label}>Ano</label>
      <Input
        placeholder="Ano do veículo"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />

      <ButtonContainer>
        <CancelButton>Cancelar</CancelButton>
        <CadastrarButton>+</CadastrarButton>
        <CadastrarButton className='btn-cadastrar'>Adicionar</CadastrarButton>
      </ButtonContainer>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const Input = styled.input`
  background-color: #1D4189;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 45%;
`;

const CancelButton = styled(Button)`
  background-color: lightgray;
  color: black;
  font-weight: bold;
`;

const CadastrarButton = styled(Button)`
  background-color: #486579;
`;

export default CadastroVeiculo;
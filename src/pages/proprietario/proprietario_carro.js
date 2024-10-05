import React, { useState } from 'react';
import styled from 'styled-components';
import './proprietario_carro.css';
import { LogoDiv } from '../../components/LogoDiv';

const CadastroProprietario = () => {
  const [nome, setNome] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Cadastro de Proprietário"/>
      
      <label style={stylePersonal.label}>Nome</label>
      <Input 
        placeholder="Nome do proprietário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label style={stylePersonal.label}>CNH</label>
      <Input
        placeholder="Número da CNH"
        value={cnh}
        onChange={(e) => setCnh(e.target.value)}
      />
      <label style={stylePersonal.label}>CPF</label>
      <Input
        placeholder="CPF do proprietário"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <ButtonContainer>
        <CancelButton>Cancelar</CancelButton>
        <SalvarButton className='btn-salvar'>Salvar</SalvarButton>
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

const SalvarButton = styled(Button)`
  background-color: #486579;
`;

export default CadastroProprietario;
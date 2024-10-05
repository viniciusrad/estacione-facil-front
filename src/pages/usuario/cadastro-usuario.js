import React, { useState } from 'react';
import styled from 'styled-components';
import './cadastro-usuario.css';
import { LogoDiv } from '../../components/LogoDiv';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Cadastro de Usuário"/>
      
      <label style={stylePersonal.label}>Nome</label>
      <Input 
        placeholder="Nome do usuário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label style={stylePersonal.label}>Email</label>
      <Input
        type="email"
        placeholder="Email do usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={stylePersonal.label}>Senha</label>
      <Input
        type="password"
        placeholder="Senha do usuário"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <label style={stylePersonal.label}>Tipo de Usuário</label>
      <Select
        value={tipoUsuario}
        onChange={(e) => setTipoUsuario(e.target.value)}
      >
        <option value="">Selecione o tipo de usuário</option>
        <option value="cliente">Cliente</option>
        <option value="proprietario">Proprietário</option>
        <option value="administrador">Administrador</option>
      </Select>

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

const Select = styled.select`
  background-color: #1D4189;
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  option {
    color: white;
    background-color: #1D4189;
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
  background-color: #2E18B9;
`;

export default CadastroUsuario;

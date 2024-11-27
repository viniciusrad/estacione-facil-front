import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';
import { UsuarioContext } from '../../context/UsuarioContext';


const ApagarConta = () => {
  const { user } = useContext(UsuarioContext);
  const [login, setLogin] = useState(user.email);
  const [senha, setSenha] = useState(user.senha);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para processar o login e senha
    console.log('Dados de agendamento:', { login, senha, id: user.id });
    try {
      fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user.id })
      });
    } catch (error) {
      console.error('Erro ao apagar conta:', error);
    }
  };

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Apagar Conta"/>
      
      <form onSubmit={handleSubmit}>
        <label style={stylePersonal.label}>Login</label>
        <Input 
          type="text"
          placeholder="Digite seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />

        <label style={stylePersonal.label}>Senha</label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <ButtonContainer>
          <CancelButton type="button">Cancelar</CancelButton>
          <CadastrarButton type="submit" className='btn-cadastrar'>Excluir</CadastrarButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default ApagarConta;

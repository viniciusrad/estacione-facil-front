import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';

const AtualizarUsuario = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para processar o login e senha
    console.log('Dados de agendamento:', { login, senha });
  };

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Atualizar Usuário"/>
      
      <form onSubmit={handleSubmit}>
        <ButtonContainer >
          <CadastrarButton type="button" style={{margin: '2px 6px'}}>Dados Cadastrais</CadastrarButton>
          <CadastrarButton type="button" style={{margin: '2px 6px'}}>Dados de Pagamento</CadastrarButton>
        </ButtonContainer>

        <label style={stylePersonal.label}>Senha</label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <ButtonContainer style={{marginTop: '10px'  }}>
          <CancelButton type="button">Cancelar</CancelButton>
          <CadastrarButton type="submit" className='btn-cadastrar'>Atualizar</CadastrarButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const stylePersonal = {
  label: { marginTop: '2rem', textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default AtualizarUsuario;

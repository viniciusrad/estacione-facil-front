import React, { useState } from 'react';
import styled from 'styled-components';
import './meu-historico.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';

const MeuHistorico = () => {
  const [nome, setNome] = useState('');
  const [placa, setPlaca] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do histórico
    console.log('Dados do histórico:', { nome, placa, cpf });
  };

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Meu Histórico"/>
      
      <form onSubmit={handleSubmit}>
        <label style={stylePersonal.label}>Nome</label>
        <Input 
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label style={stylePersonal.label}>Placa do Veículo</label>
        <Input
          placeholder="Digite a placa do veículo"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />

        <label style={stylePersonal.label}>CPF</label>
        <Input
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <ButtonContainer>
          <CancelButton type="button">Cancelar</CancelButton>
          <CadastrarButton type="submit" className='btn-cadastrar'>Salvar Histórico</CadastrarButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default MeuHistorico;

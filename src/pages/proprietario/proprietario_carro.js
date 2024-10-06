import React, { useState } from 'react';
import styled from 'styled-components';
import './proprietario_carro.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, Button, CancelButton } from '../../components/StyledComponents';

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

const SalvarButton = styled(Button)`
  background-color: #486579;
`;

export default CadastroProprietario;
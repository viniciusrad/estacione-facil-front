import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';


const CadastroVeiculo = () => {
  const [placa, setPlaca] = useState('');
  const [renavam, setRenavam] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  return (
    <Container style={{ minHeight: '800px' }}>
      <form action="">
        <LogoDiv text="Cadastro de Veículo" />

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
      </form>
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};



export default CadastroVeiculo;
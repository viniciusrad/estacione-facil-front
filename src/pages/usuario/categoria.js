import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, ButtonContainer, CadastrarButton } from '../../components/StyledComponents';
import { FaUser, FaCar, FaUserCog } from 'react-icons/fa';

const CategoriaUsuario = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Categoria selecionada:', categoriaSelecionada);
  };

  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Selecionar Categoria"/>
      
      <form onSubmit={handleSubmit}>
        <OpcoesContainer>
          <OpcaoButton
            type="button"
            selected={categoriaSelecionada === 'cliente'}
            onClick={() => setCategoriaSelecionada('cliente')}
          >
            <FaUser />
            Cliente
          </OpcaoButton>
          <OpcaoButton
            type="button"
            selected={categoriaSelecionada === 'dono'}
            onClick={() => setCategoriaSelecionada('dono')}
          >
            <FaCar />
            Dono da Vaga
          </OpcaoButton>
          <OpcaoButton
            type="button"
            selected={categoriaSelecionada === 'admin'}
            onClick={() => setCategoriaSelecionada('admin')}
          >
            <FaUserCog />
            Admin.
          </OpcaoButton>
        </OpcoesContainer>

        <ButtonContainer style={{marginTop: '20px'}}>
          <CadastrarButton type="submit" disabled={!categoriaSelecionada}>
            Confirmar
          </CadastrarButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const OpcoesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const OpcaoButton = styled.button`
  background-color: ${props => props.selected ? '#2C10CA' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : 'black'};
  border: none;
  padding: 15px 25px;
  margin: 0 5px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 30%; // Define uma largura fixa para todos os botões
  height: 120px; // Define uma altura fixa para todos os botões

  svg {
    font-size: 24px;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: ${props => props.selected ? '#2C10CA' : '#e0e0e0'};
  }
`;

export default CategoriaUsuario;

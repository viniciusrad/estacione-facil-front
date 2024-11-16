import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';
import { UsuarioContext } from '../../context/UsuarioContext';

const CadastroVeiculo = () => {
  const { user } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const [licensePlate, setLicensePlate] = useState('');
  const [renavam, setRenavam] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const vehicleData = {
        licensePlate,
        renavam,
        brand,
        model,
        year: parseInt(year),
        proprietario: user.id
      };

      const response = await fetch('http://localhost:3000/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData)
      });
      if (response.ok) {
        alert('Veículo cadastrado com sucesso!');
        // Limpar formulário
        setLicensePlate('');
        setRenavam('');
        setBrand('');
        setModel('');
        setYear('');
      } else {
        const error = await response.json();
        alert(`Erro ao cadastrar veículo: ${error.message}`);
      }
    } catch (error) {
      console.error('Erro ao cadastrar veículo:', error);
      alert('Erro ao cadastrar veículo. Por favor, tente novamente.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container style={{ minHeight: '800px' }}>
      <form onSubmit={handleSubmit}>
        <LogoDiv text="Cadastro de Veículo" />

        <label style={stylePersonal.label}>Placa</label>
        <Input
          placeholder="Placa do veículo"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
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
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <label style={stylePersonal.label}>Modelo</label>
        <Input
          placeholder="Modelo do veículo"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <label style={stylePersonal.label}>Ano</label>
        <Input
          type="number"
          placeholder="Ano do veículo"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <ButtonContainer>
          <CancelButton type="button" onClick={handleCancel}>Cancelar</CancelButton>
          <CadastrarButton type="submit" className='btn-cadastrar'>Adicionar</CadastrarButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const stylePersonal = {
  label: { textAlign: 'left', color: 'white', marginBottom: '10px' }
};

export default CadastroVeiculo;
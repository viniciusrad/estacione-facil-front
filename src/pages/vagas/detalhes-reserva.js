import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Input, ButtonContainer, CadastrarButton, CancelButton } from '../../components/StyledComponents';
import { LogoDiv } from '../../components/LogoDiv';
import { UsuarioContext } from '../../context/UsuarioContext';

const DetalhesReserva = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UsuarioContext);
  const { vaga } = location.state || {};

  const isAdmin = user?.tipo === 'administrador';

  const [reserva, setReserva] = useState({
    clienteId: user?.id,
    vagaId: vaga?.id,
    tipoCobranca: vaga?.tipoContratacao.toUpperCase(),
    preco: vaga?.tipoContratacao === 'hora' ? +vaga.precoHora : +vaga.precoDiaria,
    dataInicio: '',
    dataFim: '',
    horarioInicio: '',
    horarioFim: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserva)
      });

      if (response.ok) {
        alert('Reserva realizada com sucesso!');
        navigate('/minhas-reservas');
      } else {
        const error = await response.json();
        alert(`Erro ao realizar reserva: ${error.message}`);
      }
    } catch (error) {
      console.error('Erro ao realizar reserva:', error);
      alert('Erro ao realizar reserva. Por favor, tente novamente.');
    }
  };

  const handleCancel = () => {
    navigate('/vagas/reservar');
  };

  return (
    <Container style={{ minHeight: '800px' }}>
      <LogoDiv text="Detalhes da Vaga" />
      <div style={styles.vagaInfo}>
        <h3>Informações da Vaga</h3>
        <p><strong>Tipo:</strong> {vaga?.tipoVaga}</p>
        <p><strong>Endereço:</strong> {vaga?.endereco}</p>
        <p><strong>Preço:</strong> R$ {vaga?.tipoContratacao === 'hora' ? vaga?.precoHora : vaga?.precoDiaria} 
           por {vaga?.tipoContratacao}</p>
      </div>

      {isAdmin ? (
        <div style={styles.fotosContainer}>
          <h3 style={{ color: 'white' }}>Fotos da Vaga</h3>
          <div style={styles.fotosGrid}>
            {vaga?.fotos?.map((foto, index) => (
              <img 
                key={index}
                src={foto}
                alt={`Foto ${index + 1} da vaga`}
                style={styles.foto}
              />
            ))}
            {(!vaga?.fotos || vaga.fotos.length === 0) && (
              <p style={{ color: 'white' }}>Nenhuma foto disponível</p>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <Input
            type="date"
            required
            value={reserva.dataInicio}
            onChange={(e) => setReserva({...reserva, dataInicio: e.target.value})}
            style={styles.input}
          />
          
          <Input
            type="date"
            required
            value={reserva.dataFim}
            onChange={(e) => setReserva({...reserva, dataFim: e.target.value})}
            style={styles.input}
          />

          <Input
            type="time"
            required
            value={reserva.horarioInicio}
            onChange={(e) => setReserva({...reserva, horarioInicio: e.target.value})}
            style={styles.input}
          />

          <Input
            type="time"
            required
            value={reserva.horarioFim}
            onChange={(e) => setReserva({...reserva, horarioFim: e.target.value})}
            style={styles.input}
          />

          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>Cancelar</CancelButton>
            <CadastrarButton type="submit">Confirmar Reserva</CadastrarButton>
          </ButtonContainer>
        </form>
      )}
    </Container>
  );
};

const styles = {
  vagaInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    color: 'white',
    width: '90%',
    maxWidth: '400px'
  },
  form: {
    width: '90%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    marginBottom: '15px'
  },
  fotosContainer: {
    width: '90%',
    maxWidth: '800px',
    marginTop: '20px'
  },
  fotosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '15px'
  },
  foto: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px'
  }
};

export default DetalhesReserva; 
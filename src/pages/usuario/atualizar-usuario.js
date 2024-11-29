import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import '../pages.css';
import { LogoDiv } from '../../components/LogoDiv';
import { Container, Input, ButtonContainer, CancelButton, CadastrarButton } from '../../components/StyledComponents';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';

const AtualizarUsuario = () => {
  const { user } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const [formAtivo, setFormAtivo] = useState('cadastral');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados para dados cadastrais
  const [nome, setNome] = useState(user?.nome || '');
  const [email, setEmail] = useState(user?.email || '');
  const [cpf, setCpf] = useState(user?.cpf || '');
  const [telefone, setTelefone] = useState(user?.telefone || '');
  const [senha, setSenha] = useState('');

  // Estados para dados bancários (proprietário)
  const [banco, setBanco] = useState('');
  const [agencia, setAgencia] = useState('');
  const [contaCorrente, setContaCorrente] = useState('');

  // Estados para cartão (cliente)
  const [nomeNoCartao, setNomeNoCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [codigoVerificacao, setCodigoVerificacao] = useState('');
  const [validade, setValidade] = useState('');
  const [salvarParaFuturos, setSalvarParaFuturos] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/users/${user.id}`);
        if (!response.ok) throw new Error('Erro ao buscar dados do usuário');
        
        const userData = await response.json();
        setNome(userData.nome || '');
        setEmail(userData.email || '');
        setCpf(userData.cpf || '');
        setTelefone(userData.telefone || '');
        setSenha('');

        // Buscar dados de pagamento se não for admin
        if (user.tipo !== 'ADMIN') {
          const endpointPagamento = user.tipo === 'cliente' 
            ? `http://localhost:3000/cartoes/user/${user.id}`
            : `http://localhost:3000/dados-bancarios/user/${user.id}`;

          const pagamentoResponse = await fetch(endpointPagamento);

          console.log(endpointPagamento);
          console.log(pagamentoResponse);
          if (pagamentoResponse.ok) {
            const pagamentoData = await pagamentoResponse.json();
            if (user.tipo === 'cliente') {
              setNomeNoCartao(pagamentoData[0].nomeNoCartao || '');
              setNumeroCartao(pagamentoData[0].numeroCartao || '');
              setCodigoVerificacao(pagamentoData[0].codigoVerificacao || '');
              setValidade(pagamentoData[0].validade || '');
              setSalvarParaFuturos(pagamentoData[0].salvarParaFuturos || false);
            } else {
              setBanco(pagamentoData[0].banco || '');
              setAgencia(pagamentoData[0].agencia || '');
              setContaCorrente(pagamentoData[0].contaCorrente || '');
            }
          }
        }
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
        setError('Erro ao carregar dados do usuário');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      // Atualizar dados do usuário
      const userResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          cpf,
          telefone,
          senha: senha || undefined
        })
      });

      if (!userResponse.ok) throw new Error('Erro ao atualizar dados do usuário');

      // Atualizar dados de pagamento se necessário
      if (formAtivo === 'pagamento' && user.tipo !== 'ADMIN') {
        const pagamentoData = user.tipo === 'cliente'
          ? {
              nomeNoCartao,
              numeroCartao,
              codigoVerificacao,
              validade,
              salvarParaFuturos
            }
          : {
              banco,
              agencia,
              contaCorrente
            };

        const endpointPagamento = user.tipo === 'cliente'
          ? `http://localhost:3000/cartoes/${user.id}`
          : `http://localhost:3000/dados-bancarios/user/${user.id}`;
debugger
        const pagamentoResponse = await fetch(endpointPagamento, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pagamentoData)
        });

        if (!pagamentoResponse.ok) throw new Error('Erro ao atualizar dados de pagamento');
      }

      alert('Dados atualizados com sucesso!');
      navigate(-1);
    } catch (err) {
      console.error('Erro ao atualizar dados:', err);
      setError('Erro ao atualizar dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const renderDadosCadastrais = () => (
    <>
      <label style={stylePersonal.label}>Nome</label>
      <Input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Email</label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>CPF</label>
      <Input
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Telefone</label>
      <Input
        type="tel"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Senha</label>
      <Input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite a nova senha"
      />
    </>
  );

  const renderDadosPagamentoProprietario = () => (
    <>
      <label style={stylePersonal.label}>Banco</label>
      <Input
        type="text"
        value={banco}
        onChange={(e) => setBanco(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Agência</label>
      <Input
        type="text"
        value={agencia}
        onChange={(e) => setAgencia(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Conta Corrente</label>
      <Input
        type="text"
        value={contaCorrente}
        onChange={(e) => setContaCorrente(e.target.value)}
        required
      />
    </>
  );

  const renderDadosPagamentoCliente = () => {
    return (

    <>
      <label style={stylePersonal.label}>Nome no Cartão</label>
      <Input
        type="text"
        value={nomeNoCartao}
        onChange={(e) => setNomeNoCartao(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Número do Cartão</label>
      <Input
        type="text"
        value={numeroCartao}
        onChange={(e) => setNumeroCartao(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Código de Verificação</label>
      <Input
        type="text"
        maxLength="3"
        value={codigoVerificacao}
        onChange={(e) => setCodigoVerificacao(e.target.value)}
        required
      />

      <label style={stylePersonal.label}>Validade</label>
      <Input
        type="date"
        value={validade}
        onChange={(e) => setValidade(e.target.value)}
        required
      />

      <div style={stylePersonal.checkboxContainer}>
        <input
          type="checkbox"
          checked={salvarParaFuturos}
          onChange={(e) => setSalvarParaFuturos(e.target.checked)}
          style={stylePersonal.checkbox}
        />
        <label style={stylePersonal.checkboxLabel}>
          Salvar para pagamentos futuros
        </label>
      </div>
      </>
    )
  };

 
  return (
    <Container style={{minHeight: '800px'}}>
      <LogoDiv text="Atualizar Usuário"/>
      
      <form onSubmit={handleSubmit}>
        <ButtonContainer>
          <CadastrarButton 
            type="button" 
            style={{
              margin: '2px 6px',
              backgroundColor: formAtivo === 'cadastral' ? '#004AAD' : '#0066FF'
            }}
            onClick={() => setFormAtivo('cadastral')}
          >
            Dados Cadastrais
          </CadastrarButton>
          
          {user?.tipo !== 'administrador' && (
            <CadastrarButton 
              type="button" 
              style={{
                margin: '2px 6px',
                backgroundColor: formAtivo === 'pagamento' ? '#004AAD' : '#0066FF'
              }}
              onClick={() => setFormAtivo('pagamento')}
            >
              Dados de Pagamento
            </CadastrarButton>
          )}
        </ButtonContainer>

        {formAtivo === 'cadastral' && renderDadosCadastrais()}
        
        {formAtivo === 'pagamento' && user?.tipo === 'proprietario' && 
          renderDadosPagamentoProprietario()}
        
        {formAtivo === 'pagamento' && user?.tipo === 'cliente' && 
          renderDadosPagamentoCliente()}

        <ButtonContainer style={{marginTop: '20px'}}>
          <CancelButton type="button" onClick={() => navigate(-1)}>
            Cancelar
          </CancelButton>
          <CadastrarButton type="submit">
            Atualizar
          </CadastrarButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const stylePersonal = {
  label: { 
    marginTop: '1rem', 
    textAlign: 'left', 
    color: 'white', 
    marginBottom: '10px',
    display: 'block'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem'
  },
  checkbox: {
    marginRight: '10px',
    width: '20px',
    height: '20px'
  },
  checkboxLabel: {
    color: 'white'
  }
};

export default AtualizarUsuario;

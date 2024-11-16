import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { LogoDiv } from '../../components/LogoDiv';
import MessagePopUp from '../../components/MessagePopUp';
import { UsuarioContext } from '../../context/UsuarioContext';





export const Login = () => {

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: userLogin,
          senha: userPassword
        })
      });

      const data = await response.json();
      console.log('Resposta do servidor:', data);

      // const tipoUsuario = verificarTipoUsuario(userLogin);
      setTipoUsuario({tipo: data.usuario.tipo, id: data.usuario.id, nome: data.usuario.nome});

      if (response.ok) {
        navigate('/');
      } else {
        setShowPopUp(true);
        setMessagePopUp('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setShowPopUp(true);
      setMessagePopUp('Erro ao conectar com o servidor');
    }
  }

  const handleLoginInput = (event) => {
    console.log(event.target.value)
    setUserLogin(event.target.value)
  }

  const handlePasswordInput = (event) => {
    setUserPassword(event.target.value)
  }

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [messagePopUp, setMessagePopUp] = useState('');


  const { tipoUsuario, setTipoUsuario } = useContext(UsuarioContext);

  const verificarTipoUsuario = (login) => {
    if (login === 'admin') {
      return 'administrador';
    } else if (login === 'proprietario') {
      return 'proprietario';
    } else {
      return 'cliente';
    }
  };

  return (
    <div className="login-container">
      {showPopUp && (
        <MessagePopUp
          title="Erro de Login"
          body={messagePopUp}
          onCancel={() => setShowPopUp(false)}
          onConfirm={() => setShowPopUp(false)}
          onlyWarning={true}
        />
      )}
      {/* Formulário de Login */}
      <form className="login-form">
        <LogoDiv text='Entrar' />

        {/* Campo de usuário */}
          <label htmlFor="username">Usuário</label>
        <div className="form-group">
          <input type="text" id="username" placeholder="Digite seu usuário" value={userLogin} onChange={handleLoginInput} />
        </div>

        {/* Campo de senha */}
          <label htmlFor="password">Senha</label>
        <div className="form-group">
          <input type="password" id="password" placeholder="Digite sua senha" value={userPassword} onChange={handlePasswordInput} />
        </div>

        <button type="submit" id="btn_login" onClick={handleLogin}>Login</button>
      </form>

      {/* Botão de Cadastro */}
      <div className="register-container">
        <button 
          className="register-button" 
          onClick={() => navigate('/usuario/cadastro')}
        >
          Cadastrar-se
        </button>
      </div>

      {/* Contêineres para redes sociais */}
      <div className="social-login-container">
        <h3>Ou entre com:</h3>

        {/* Botões de redes sociais */}
        <div className="social-buttons">
          <button className="social-button">
            <img src="/img/ic-facebook.png" alt="teste" />
          </button>
          <button className="social-button">
            <img src="/img/ic-google.png" alt="teste" />
          </button>
        </div>
      </div>
    </div>
  );
}



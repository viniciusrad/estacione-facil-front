import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { LogoDiv } from '../../components/LogoDiv';

export const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event)
    console.log(userLogin)
    console.log(userPassword)

    if(userLogin == 'vinicius'){
      navigate('/')
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



  return (

    <div className="login-container">
      {/* Formulário de Login */}
      <form className="login-form">
        <LogoDiv text='Entrar' />

        {/* Campo de usuário */}
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" placeholder="Digite seu usuário" value={userLogin} onChange={handleLoginInput} />
        </div>

        {/* Campo de senha */}
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" value={userPassword} onChange={handlePasswordInput} />
        </div>

        {/* Botão de login */}
        {/* <button onClick={() => navigate('/')}>Ir para Home</button> */}

        <button type="submit" id="btn_login" onClick={handleLogin}>Login</button>
      </form>

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



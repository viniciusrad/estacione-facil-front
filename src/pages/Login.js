import React from 'react';
import './Login.css'; // Importar estilo específico, se necessário

const Login = () => {
  return (

    // <h2>outro teste</h2>
    <div className="login-container">
      {/* Formulário de Login */}
      <form className="login-form">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{maxWidth: '60px', maxHeight: '60px', marginRight: '1rem'}}>
            <img src="/logo_estacione_facil.png" alt="teste" style={{width: '100%'}}/>
          </div>
          <h1>Entrar</h1>
        </div>

        {/* Campo de usuário */}
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" placeholder="Digite seu usuário" />
        </div>

        {/* Campo de senha */}
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" />
        </div>

        {/* Botão de login */}
        <button type="submit" id="btn_login">Login</button>
      </form>

      {/* Contêineres para redes sociais */}
      <div className="social-login-container">
        <h3>Ou entre com:</h3>

        {/* Botões de redes sociais */}
        <div className="social-buttons">
          <button className="facebook-button">Facebook</button>
          <button className="google-button">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

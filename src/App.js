import React, { useState } from 'react';
import './App.css'
import AppRoutes from './routes/RoutesComponent';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from './context/UsuarioContext';
import { VagasProvider } from './context/VagasContext';

function App() {

  // const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState('');

  return (
    <VagasProvider>
      <UsuarioContext.Provider value={{ tipoUsuario, setTipoUsuario }}>
        <div className="App">
          {/* <h1>teste</h1> */}
          <AppRoutes />
        </div>
      </UsuarioContext.Provider>
    </VagasProvider>
  );
}

export default App;

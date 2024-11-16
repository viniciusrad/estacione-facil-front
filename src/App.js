import React, { useState } from 'react';
import './App.css'
import AppRoutes from './routes/RoutesComponent';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from './context/UsuarioContext';
import { VagasProvider } from './context/VagasContext';

function App() {

  const [user, setUser] = useState({tipo: '', id: 0, nome: '', nome: ''});

  return (
    <VagasProvider>
      
      <UsuarioContext.Provider value={{ user, setUser }}>
        <div className="App">
          <AppRoutes />
        </div>
      </UsuarioContext.Provider>
    </VagasProvider>
  );
}

export default App;

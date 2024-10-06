import React from 'react';
import './App.css'
import AppRoutes from './routes/RoutesComponent';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {

  // const navigate = useNavigate();

  return (
    <div className="App">
      {/* <h1>teste</h1> */}
      <AppRoutes />
    </div>
  );
}

export default App;

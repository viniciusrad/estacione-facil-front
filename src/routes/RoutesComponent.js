import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login'; // Importar o componente Login

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

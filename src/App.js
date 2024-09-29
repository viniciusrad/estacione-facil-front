import React from 'react';
import AppRoutes from './routes/RoutesComponent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>teste</h1> */}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

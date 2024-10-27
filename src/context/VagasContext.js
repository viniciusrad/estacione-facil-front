import React, { createContext, useState } from 'react';
import vagasMock from '../mocks/vagasMock';

export const VagasContext = createContext();

export const VagasProvider = ({ children }) => {
  const [vagas, setVagas] = useState(vagasMock);

  const adicionarVaga = (novaVaga) => {
    const novoId = vagas.length > 0 ? Math.max(...vagas.map(v => v.id)) + 1 : 1;
    const vagaComId = { ...novaVaga, id: novoId };
    setVagas([...vagas, vagaComId]);
  };

  return (
    <VagasContext.Provider value={{ vagas, adicionarVaga }}>
      {children}
    </VagasContext.Provider>
  );
};

// Fichero para importar el serverContext y poder usar la variables del serverContext en otros componentes
import { useContext } from 'react';
import { ServerContext } from '@/context/ServerContext';

export const useServer = () => {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error('useServer debe usarse dentro de un ServerProvider');
  }
  return context;
};

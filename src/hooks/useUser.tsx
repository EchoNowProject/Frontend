import { UserContext } from '@/context/User/UserContext';
import { useContext } from 'react';

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('El contexto debe de estar dentro de un UserContext');
  }

  return context;
};

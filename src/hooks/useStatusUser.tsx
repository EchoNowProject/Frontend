import { StatusUserContext } from '@/context/StatusUser/StatusUserContext';
import { useContext } from 'react';

export const useStatusUser = () => {
  const context = useContext(StatusUserContext);

  if (!context) {
    throw new Error('El contexto debe de estar dentro de un StatusUserContex');
  }

  return context;
};

import { useContext } from 'react';
import { LoadingContext } from '@/context/Loading/LoadingContext';

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('error al implementar el contexto del Loading');
  }

  return context;
};

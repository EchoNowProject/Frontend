import React, { ReactNode, useState } from 'react';
import { LoadingContext } from '@/context/Loading/LoadingContext';

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Cargando...');

  const valores = {
    showLoading,
    message,
    setShowLoading,
    setMessage,
  };

  return <LoadingContext.Provider value={valores}>{children}</LoadingContext.Provider>;
};

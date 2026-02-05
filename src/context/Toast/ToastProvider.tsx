import React, { ReactNode, useState } from 'react';
import { ToastContext } from '@/context/Toast/ToastContext';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [textToast, setTextToast] = useState<string | null>(null);

  const handleOnClick = (onClickFunction?: () => void) => {
    if (onClickFunction && typeof onClickFunction === 'function') {
      onClickFunction();
    }

    setShowToast(false);
    setTextToast(null);
  };

  const valores = { showToast, textToast, setShowToast, setTextToast, handleOnClick };

  return <ToastContext.Provider value={valores}>{children}</ToastContext.Provider>;
};

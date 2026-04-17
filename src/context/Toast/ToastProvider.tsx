import React, { ReactNode, useState } from 'react';
import { ToastContext } from '@/context/Toast/ToastContext';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [textToast, setTextToast] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleOnClick = (onClickFunction?: () => void) => {
    if (onClickFunction && typeof onClickFunction === 'function') {
      onClickFunction();
    }

    setShowToast(false);
    setTextToast(null);
  };

  const initiateToast = (message: string, statusOk: boolean) => {
    setTextToast(message);
    setSuccess(statusOk);
    setShowToast(true);
  };

  const valores = {
    showToast,
    textToast,
    success,
    setShowToast,
    setTextToast,
    handleOnClick,
    initiateToast,
  };

  return <ToastContext.Provider value={valores}>{children}</ToastContext.Provider>;
};

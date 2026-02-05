import React, { useContext } from 'react';
import { ToastContext } from '@/context/Toast/ToastContext';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('error al implementar el contexto del Toast');
  }

  /**
   * No podemos utilizarlo de esta forma ya que devoleria un objeto
   * Y lo deberiamos de usar de esta manera
   * ? EXPORTACION: const { context } = useToast();
   * ? USO : context.showToast(...)
   */

  //return { context };

  /**
   * Para poder usarlo mas comodamente deberemos de hacerlo directamente como contexto
   * ? EXPORTACION: const context = useToast();
   * ? USO: const { showToast, hideToast } = useToast();
   */

  return context;
};

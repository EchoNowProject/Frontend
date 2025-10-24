import { useState } from 'react';

export const useHelper = () => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const closeToast = () => {
    setShowToast(false);
  };

  return { showToast, closeToast, setShowToast };
};

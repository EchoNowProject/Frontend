import { useState } from 'react';

export const useHelper = () => {
  const [showToast, setShowToast] = useState<boolean>(true);

  const closeToast = () => {
    setShowToast(false);
  };

  return { showToast, closeToast };
};

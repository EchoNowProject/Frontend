import { useLoading } from '@/hooks/useLoading';
import React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

export const Loading = () => {
  const { showLoading, message } = useLoading();

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-100 flex justify-center items-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col">
        <OrbitProgress color="#7008e7" size="medium" text="" textColor="" />
        {message}
      </div>
    </div>
  );
};

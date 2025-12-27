import React from 'react';

export const Empty = () => {
  return (
    <>
      <div className="flex flex-col h-full justify-center items-center text-gray-400">
        <span>No hay ningún chat seleccionado</span>
      </div>
    </>
  );
};

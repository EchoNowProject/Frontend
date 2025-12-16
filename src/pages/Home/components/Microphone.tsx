import { Microphone1 } from '@/icons';
import React, { useState } from 'react';
import useSound from 'use-sound';

/* Sounds */
import popEnter from '@assets/sounds/pop-enter.mp3';
import popOut from '@assets/sounds/pop-out.mp3';

export const Microphone = () => {
  const [enabled, setEnabled] = useState(true);
  const [playOut] = useSound(popOut);
  const [playEnter] = useSound(popEnter);

  const handleClick = () => {
    if (enabled) {
      playOut();
    } else {
      playEnter();
    }

    setEnabled(!enabled); // 🧩 Siempre se cambia el estado
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`flex items-center rounded-md p-1 hover:bg-violet-900 
          ${enabled ? '' : 'bg-violet-900 shadow-lg'}
        `}
        onClick={() => handleClick()}
      >
        {/* Icono */}
        <span
          className={`relative transition-all duration-200 ease-in-out
            ${enabled ? 'scale-100 opacity-100' : 'scale-110 opacity-90'}
          `}
        >
          <Microphone1 color={enabled ? '#1c1917' : '#e7000b'} />

          {/* tachado encima */}
          {!enabled && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="block w-5 h-[1px] bg-red-600 rotate-45" />
            </span>
          )}
        </span>
      </button>
    </div>
  );
};

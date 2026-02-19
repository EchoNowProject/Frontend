import React from 'react';
import Xmark from '@icons/Xmark';
import { useToast } from '@/hooks/useToast';
import { useEffect } from 'react';
import useSound from 'use-sound';
import errorSound from '@/assets/sounds/error-sound.mp3';
import successSound from '@/assets/sounds/success-sound.mp3';
import discardSound from '@/assets/sounds/discard-sound.mp3';

export default function Toast() {
  const { showToast, setShowToast, setTextToast, textToast, handleOnClick, success } = useToast();
  const [playEnterErrorSound] = useSound(errorSound);
  const [playEnterSuccessSound] = useSound(successSound);
  const [playOut] = useSound(discardSound);

  /* ADD SOUND EFFECTS AND CLOSE DE TOAST BY TIME  */
  useEffect(() => {
    if (showToast) {
      if (success) {
        playEnterSuccessSound();
      } else {
        playEnterErrorSound();
      }
    } else {
      playOut();
    }

    tiempo();
  }, [showToast]);

  /* CONTROLS OF THE TIME TO CLOSE THE TOAST  */
  const tiempo = () => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
        setTextToast(null);
      }, 15000);
    }
  };

  return (
    <>
      {showToast && (
        <div
          id="toast-default"
          className="fixed m-10 right-5 flex items-center w-auto p-4 bg-violet-500 rounded-lg shadow-lg text-white z-50"
          role="alert"
        >
          <div className="flex text-sm font-normal justify-items-end text-white me-5">
            {textToast}
          </div>
          <button
            type="button"
            className="bg-violet-400 -my-2 hover:text-gray-900 rounded-lg p-1.5 hover:bg-violet-800 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#toast-default"
            aria-label="Close"
            onClick={() => handleOnClick()}
          >
            <Xmark />
          </button>
        </div>
      )}
    </>
  );
}

import React from 'react';
import { LocationArrowRight, PaperClip1, Photos, EmojiSmileSunglass, Plus } from '@/icons';

export const ToolBarChat = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        {/* Bloque Izquierda: Ahora con gap para separar input de icono */}
        <div className="flex items-center gap-2 flex-1">
          <input
            type="text"
            placeholder="Enviar Mensaje"
            className="bg-neutral-800 rounded-lg p-2 flex-1 focus:outline-none"
          />

          <button className="flex justify-center items-center bg-neutral-800 p-1 rounded-lg">
            <LocationArrowRight size={23} />
          </button>
        </div>

        <div className="hidden lg:flex md:flex justify-between gap-4 mx-4 transition delay-150 duration-300 ease-in-out">
          {/* Ficheros adjuntos */}

          <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg">
            <PaperClip1 size={23} />
          </button>

          {/* Galeria */}
          <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg">
            <Photos size={23} />
          </button>

          {/* Emotes */}
          <button className="flex justify-center items-center hover:bg-neutral-800 p-1 rounded-lg">
            <EmojiSmileSunglass size={23} />
          </button>
        </div>

        <div className="sm:flex md:hidden lg:hidden mx-4">
          <button className="flex justify-center items-center bg-neutral-800 p-1 rounded-lg transition delay-150 duration-300 ease-in-out">
            <Plus size={23} />
          </button>
        </div>
      </div>
    </>
  );
};

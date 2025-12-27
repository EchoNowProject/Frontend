import EchoNowlogo from '@/assets/images/logo-blanco.png';
import React from 'react';
import { useCreateServer } from '@/hooks/server/useCreateServer';
import { Globe1, UserMultiple4, Camera1 } from '@/icons';

export const CreateServerPage = () => {
  const { audience, setAudience, updateNameServer, saveServer } = useCreateServer();

  return (
    <div className="relative min-h-screen">
      {/* IMAGEN DE FONDO */}
      <img
        src={EchoNowlogo}
        alt="Background Logo"
        className="
          fixed 
          top-1/2 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          z-0 
          grayscale 
          opacity-10
          lg:w-100
          md:w-50
          pointer-events-none
          select-none
        "
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Title */}
        <div className="flex items-center justify-center mt-12 py-6 text-5xl font-extrabold text-white">
          <h1 className="drop-shadow-md">Creación del Servidor</h1>
        </div>

        {/* Setting Server Container */}
        <div className="flex flex-1 items-center">
          {/* Columna izquierda */}
          <div className="w-1/2 flex justify-end px-8">
            {/* CARD 1: Mas grande con max-w-xl y p-10 */}
            <div className="flex flex-col w-full max-w-xl p-10 border-2 rounded-2xl border-neutral-800 bg-neutral-900/90 backdrop-blur-md shadow-2xl">
              <h5 className="mb-8 text-3xl text-center font-bold text-white">
                ¿A qué tipo de público será destinado?
              </h5>

              <section className="flex flex-col gap-6">
                <button
                  onClick={() => setAudience('community')}
                  className={`flex items-center ${
                    audience === 'community' ? 'bg-neutral-700' : ''
                  } hover:bg-neutral-700 border-2 border-violet-600 hover:scale-[1.02] active:scale-95 transition-all py-5 px-6 rounded-xl text-white font-bold text-lg shadow-lg`}
                >
                  <Globe1 />
                  <p className="ms-4">Para una comunidad</p>
                </button>

                <button
                  onClick={() => setAudience('friends')}
                  className={`flex items-center ${
                    audience === 'friends' ? 'bg-neutral-700' : ''
                  } hover:bg-neutral-700 border-2 border-violet-600 hover:scale-[1.02] active:scale-95 transition-all py-5 px-6 rounded-xl text-white font-bold text-lg shadow-lg`}
                >
                  <UserMultiple4 />
                  <p className="ms-4">Para mis amigos</p>
                </button>
              </section>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="w-1/2 flex justify-start px-8">
            {/* CARD 2: Mas grande con max-w-xl y p-10 */}
            <div className="flex flex-col w-full max-w-xl p-10 border-2 rounded-2xl border-neutral-800 bg-neutral-900/90 backdrop-blur-md shadow-2xl text-center">
              <section className="flex justify-center mb-6">
                <div className="p-4 bg-neutral-800 rounded-full shadow-inner">
                  {/* <img
                    src={EchoNowlogo}
                    className="size-24 grayscale brightness-125"
                    alt="EchoNowLogo"
                  /> */}
                  <Camera1 />
                </div>
              </section>

              <h5 className="mb-8 text-3xl font-bold text-white">Nombre del Servidor</h5>

              <div className="space-y-6">
                {/* Ejemplo de Input si lo necesitas para rellenar el espacio */}
                <input
                  type="text"
                  placeholder="Servidor de Nombre Usuario"
                  onChange={(e) => updateNameServer(e.target.value)}
                  className="flex items-center w-full hover:bg-neutral-700 border-2 border-violet-600 hover:scale-[1.02] active:scale-95 transition-all py-5 px-6 rounded-xl text-white font-bold text-lg shadow-lg focus:outline-0"
                />

                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center text-white bg-brand hover:bg-neutral-700 hover:neutral-700 hover:scale-[1.03] font-bold rounded-xl text-xl px-6 py-4 transition-all shadow-lg focus:outline-0"
                  onClick={() => saveServer()}
                >
                  Crear Servidor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

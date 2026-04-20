import EchoNowlogo from '@/assets/images/logo-blanco.png';
import { useServer } from '@/hooks/useServer';
import { Globe1, UserMultiple4, Camera1 } from '@/icons';
import { TypeServer } from '@/types';

export const CreateServerPage = () => {
  const { audience, setAudience, updateNameServer, updateTypeServer, createServer, server } =
    useServer();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* BACKGROUND */}
      <img
        src={EchoNowlogo}
        alt="Background Logo"
        className="
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          z-0 grayscale opacity-10
          w-[250px] sm:w-[350px] lg:w-[500px]
          pointer-events-none select-none
        "
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* TITLE */}
        <div className="flex justify-center mt-10 sm:mt-12 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
            Creación del Servidor
          </h1>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-10 px-4 py-10">
          {/* LEFT CARD */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-xl p-6 sm:p-8 lg:p-10 border-2 rounded-2xl border-neutral-800 bg-neutral-900/90 backdrop-blur-md shadow-2xl">
              <h5 className="mb-6 sm:mb-8 text-xl sm:text-2xl lg:text-3xl text-center font-bold text-white">
                ¿A qué tipo de público será destinado?
              </h5>

              <div className="flex flex-col gap-4 sm:gap-6">
                <button
                  onClick={() => setAudience('community')}
                  className={`flex items-center justify-center sm:justify-start gap-4
                    ${audience === 'community' ? 'bg-neutral-700' : ''}
                    hover:bg-neutral-700 border-2 border-violet-600
                    hover:scale-[1.02] active:scale-95 transition-all
                    py-4 sm:py-5 px-5 sm:px-6 rounded-xl text-white font-bold text-base sm:text-lg shadow-lg`}
                >
                  <Globe1 />
                  <p>Para una comunidad</p>
                </button>

                <button
                  onClick={() => setAudience('friends')}
                  className={`flex items-center justify-center sm:justify-start gap-4
                    ${audience === 'friends' ? 'bg-neutral-700' : ''}
                    hover:bg-neutral-700 border-2 border-violet-600
                    hover:scale-[1.02] active:scale-95 transition-all
                    py-4 sm:py-5 px-5 sm:px-6 rounded-xl text-white font-bold text-base sm:text-lg shadow-lg`}
                >
                  <UserMultiple4 />
                  <p>Para mis amigos</p>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-xl p-6 sm:p-8 lg:p-10 border-2 rounded-2xl border-neutral-800 bg-neutral-900/90 backdrop-blur-md shadow-2xl text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-neutral-800 rounded-full shadow-inner">
                  <Camera1 />
                </div>
              </div>

              <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Nombre del Servidor
              </h5>

              {/* TYPE SERVER */}
              <div className="my-6 sm:my-8 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className={`w-full text-white hover:bg-neutral-700 hover:scale-[1.03]
                    font-bold rounded-xl text-base sm:text-lg lg:text-xl px-5 py-4
                    transition-all shadow-lg border-2 border-violet-600
                    ${server.type_server === TypeServer.PUBLIC ? 'bg-neutral-700' : 'bg-brand'}`}
                  onClick={() => updateTypeServer(TypeServer.PUBLIC)}
                >
                  Público
                </button>

                <button
                  type="button"
                  className={`w-full text-white hover:bg-neutral-700 hover:scale-[1.03]
                    font-bold rounded-xl text-base sm:text-lg lg:text-xl px-5 py-4
                    transition-all shadow-lg border-2 border-violet-600
                    ${server.type_server === TypeServer.PRIVATE ? 'bg-neutral-700' : 'bg-brand'}`}
                  onClick={() => updateTypeServer(TypeServer.PRIVATE)}
                >
                  Privado
                </button>
              </div>

              {/* INPUT + BUTTON */}
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Nombre del servidor"
                  onChange={(e) => updateNameServer(e.target.value)}
                  className="w-full hover:bg-neutral-700 border-2 border-violet-600
                    transition-all py-4 px-5 rounded-xl text-white font-bold text-base sm:text-lg
                    shadow-lg focus:outline-none"
                />

                <button
                  type="button"
                  className="w-full text-white bg-brand hover:bg-neutral-700
                    hover:scale-[1.03] font-bold rounded-xl text-base sm:text-lg lg:text-xl
                    px-6 py-4 transition-all shadow-lg"
                  onClick={() => createServer()}
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

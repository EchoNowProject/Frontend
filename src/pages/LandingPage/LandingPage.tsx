import './LandingPage.css';
import { Message3Text } from '@/icons';

export const LandingPage = () => {
  return (
    <div className="flex-1 flex items-center w-full">
      {/* Container con padding responsivo */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cambiamos a flex-col en móvil y flex-row en desktop */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Texto: Centrado en móvil, izquierda en desktop */}
          <div className="space-y-4 text-center md:text-left text-shadow-lg">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Habla <br className="hidden md:block" />
              conecta <br className="hidden md:block" />
              comparte <br />
              <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-200">
                Todo en vivo.
              </span>
            </h1>
          </div>

          {/* Icono: Más pequeño en móvil, grande en desktop */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl icon text-blue-600 mt-6 md:mt-0">
            <Message3Text className="icon" />
          </h1>
        </div>
      </div>
    </div>
  );
};

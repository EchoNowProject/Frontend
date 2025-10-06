import React from 'react';
import PricingCard from './PricingCards/PricingCard';
import Rocket5 from '@/icons/Rocket5';
import CheckCircle1 from '@/icons/CheckCircle1';
import StarFat from '@/icons/StarFat';

const basicPlan = [
  'Mensajería ilimitada',
  'Canales de texto y voz básicos',
  'Llamadas de voz y video',
  'Compartición de archivos',
  'Historial de mensajes',
  'Temas básicos',
  'Seguridad',
  'Bots comunitarios',
];

const purpleTeam = [
  'Streaming HD',
  'Llamadas de voz y video mejoradas',
  'Subida de archivos ampliada',
  'Historial ilimitado de mensajes',
  'Reacciones y emojis personalizados',
  'Servidores personalizados',
  'Banner e icono animado',
  'Canal de bienvenida',
  'Roles avanzados con permisos detallados',
  'Prioridad en servidores y soporte técnico',
  'Sin publicidad',
  'Integraciones avanzadas',
  'Backup automático de chats y archivos',
];

export default function Planes() {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-start mt-20">
        <h1 className="text-5xl font-bold text-shadow-2xl">Elija su plan!</h1>
      </div>
      <div className="flex justify-center items-start pt-20">
        <div className="flex space-x-25 rounded-lg p-6">
          <PricingCard
            pricingCard={{
              title: 'Básico',
              texto: (
                <>
                  <ul role="list" className="space-y-5 my-7">
                    {basicPlan.map((item) => (
                      <li className="flex items-center">
                        <CheckCircle1 color="#1A43D6" size={20} />

                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {item}
                        </span>
                      </li>
                    ))}

                    {purpleTeam.map((item) => (
                      <li className="flex items-center">
                        <CheckCircle1 color="#6a7282" size={20} />

                        <span className="text-base line-through font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
              buttonText: (
                <>
                  <p className="flex">
                    <Rocket5 color="#fff" size={20} className="mx-3" />
                    Elejir Plan
                  </p>
                </>
              ),
            }}
          />
          <PricingCard
            pricingCard={{
              title: 'Purple Team',
              texto: (
                <>
                  <ul role="list" className="space-y-5 my-7">
                    {basicPlan.map((item) => (
                      <li className="flex items-center">
                        <CheckCircle1 color="#1A43D6" size={20} />

                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {item}
                        </span>
                      </li>
                    ))}

                    {purpleTeam.map((item) => (
                      <li className="flex items-center">
                        <CheckCircle1 color="#1A43D6" size={20} />

                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
              price: 5.99,
              fecha: 'Mes',
              buttonText: (
                <>
                  <p className="flex">
                    <StarFat color="#fff" size={20} className="mx-3" />
                    Mejorar Plan
                  </p>
                </>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}

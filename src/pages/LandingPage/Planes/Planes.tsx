import { PricingCard } from '@/pages';
import { Rocket5, CheckCircle1, StarFat } from '@/icons';

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

const FeatureList = ({ items, included = true }: { items: Array<string>; included?: boolean }) => (
  <ul className="space-y-3 my-6">
    {items.map((item, i) => (
      <li key={i} className="flex items-start">
        <CheckCircle1 color={included ? '#7f22fe' : '#6a7282'} size={18} className="mt-1" />
        <span
          className={`text-sm leading-tight ms-3 mt-1 ${
            included ? 'text-gray-400' : 'text-gray-400 line-through'
          }`}
        >
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export const Planes = () => {
  return (
    <div className="pb-10 md:pb-20">
      {/* Title */}
      <div className="flex justify-center items-start mt-12 sm:mt-20 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-shadow-2xl text-center text-white">
          Elija su plan!
        </h1>
      </div>

      <div className="flex justify-center items-start pt-10 sm:pt-20 px-4">
        <div
          className="
        flex 
        flex-col 
        lg:flex-row 
        gap-6 
        lg:gap-20
        w-full 
        max-w-6xl
      "
        >
          <div className="w-full">
            <PricingCard
              pricingCard={{
                title: 'Básico',
                texto: (
                  <>
                    <FeatureList items={basicPlan} />
                    <FeatureList items={purpleTeam} included={false} />
                  </>
                ),
                buttonText: (
                  <div className="flex items-center justify-center">
                    <Rocket5 color="#fff" size={20} className="mr-2" />
                    Elegir Plan
                  </div>
                ),
              }}
            />
          </div>

          <div className="w-full">
            <PricingCard
              pricingCard={{
                title: 'Purple Team',
                texto: (
                  <>
                    <FeatureList items={basicPlan} />
                    <FeatureList items={purpleTeam} />
                  </>
                ),
                price: 5.99,
                fecha: 'Mes',
                buttonText: (
                  <div className="flex items-center justify-center">
                    <StarFat color="#fff" size={20} className="mr-2" />
                    Mejorar Plan
                  </div>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

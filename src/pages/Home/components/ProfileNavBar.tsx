import React, { useEffect, useRef, useState } from 'react';
import { Exit } from '@/icons';
import { useAuth } from '@/hooks/useAuth';

export const Profile = () => {
  const [active, setActive] = useState<boolean>(false);
  const { logout } = useAuth();

  //Usamos HTMLLIElement porque el ref irá en la etiqueta <li>
  const containerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (containerRef.current && !containerRef.current.contains(target)) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);

  return (
    <li
      ref={containerRef}
      className="inline-flex items-center gap-1.5 relative text-gray-500 pe-3 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12"
    >
      <div className="relative inline-flex text-start">
        <button
          type="button"
          className="p-0.5 inline-flex items-center rounded-full"
          onClick={() => setActive(!active)}
        >
          <img
            className="shrink-0 size-7 rounded-full"
            src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
            alt="Avatar"
          />
        </button>
      </div>

      {/* Mas Opciones */}
      {active && (
        <div className="absolute top-full -end-3 mt-3 w-48 z-10 text-white bg-violet-700 border border-violet-700 rounded-xl shadow-xl">
          <div className="p-1">
            <div className="flex flex-col gap-y-1">
              <button
                type="button"
                className="w-full py-2 px-2.5 flex justify-start items-center gap-x-3 rounded-lg cursor-pointer text-[13px] text-gray-200 hover:bg-violet-600 focus:outline-none"
              >
                <span className="text-sm font-medium">Ajustes del Server</span>
              </button>
            </div>
          </div>

          <div className="p-1 border-t border-violet-600">
            <button
              type="button"
              className="w-full flex items-center gap-x-3 py-2 px-2.5 rounded-lg text-sm hover:bg-violet-900 focus:outline-none"
              onClick={() => logout()}
            >
              <Exit />
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

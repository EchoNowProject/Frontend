import React, { useEffect, useRef, useState } from 'react';
import { Exit, Xmark } from '@/icons';
import { useAuth } from '@/hooks/useAuth';
import { useStatusUser } from '@/hooks/useStatusUser';

export const Profile = () => {
  const [active, setActive] = useState<boolean>(false);
  const [showStatusContainer, setshowStatusContainer] = useState<boolean>(false);
  const { logout } = useAuth();
  const { getAllUserStatus, statusUser, statusUserAll, getUserStatus, changeStatusUser } =
    useStatusUser();

  //Usamos HTMLLIElement porque el ref irá en la etiqueta <li>
  const containerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setshowStatusContainer(false);

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

  useEffect(() => {
    getUserStatus();
  }, []);

  useEffect(() => {
    getAllUserStatus();
  }, [statusUser]);

  const extraInfoStatus = (statusId: number) => {
    switch (statusId) {
      case 1:
        return <div className="bg-green-300/90 p-1.5 rounded "></div>;
      case 2:
        return <div className="bg-amber-300/90 p-1.5 rounded"></div>;
      case 3:
        return <div className="bg-neutral-300/90 p-1.5 rounded"></div>;
      case 4:
        return <div className="bg-neutral-300/90 p-1.5 rounded"></div>;

      case 5:
      case 6:
        return <div className="bg-red-500 p-1.5 rounded"></div>;
    }
  };

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
            <div className="flex flex-col gap-y-1 text-white">
              <button
                type="button"
                className="w-full flex items-center gap-x-3 py-2 px-2.5 rounded-lg text-sm bg-violet-600 hover:bg-violet-900 focus:outline-none"
              >
                <span className="text-sm font-semibold">Editar perfil</span>
              </button>

              {/* Estado */}
              <div className="relative inline-flex text-start">
                <button
                  type="button"
                  className="w-full flex items-center gap-x-3 py-2 px-2.5 rounded-lg text-sm hover:bg-violet-900 focus:outline-none"
                  onClick={() => {
                    setshowStatusContainer(!showStatusContainer);
                  }}
                >
                  <div>{extraInfoStatus(statusUser.id)}</div>
                  <span className="capitalize">{statusUser.name}</span>
                </button>
              </div>

              {showStatusContainer && (
                <div className="relative inline-flex text-start h-full w-full">
                  {/* Contenedor principal: añadido flex y flex-col */}
                  <div className="absolute right-48 -top-12 w-50 p-4 z-10 flex flex-col gap-2 text-white bg-violet-700 border border-violet-700 rounded-xl shadow-xl">
                    {/* Botón de cierre: posicionado arriba a la derecha */}
                    <button
                      onClick={() => setshowStatusContainer(false)}
                      className="absolute top-2 right-2 bg-violet-400 hover:text-gray-900 rounded-lg p-0.5 hover:bg-violet-800 inline-flex items-center justify-center transition-colors"
                      aria-label="Close"
                    >
                      <Xmark size={16} />
                    </button>

                    {/* Lista de ítems en columna */}
                    <ul className="flex flex-col gap-2 mt-3">
                      {statusUserAll.map((s) => (
                        <li
                          key={s.id}
                          className="px-2 py-1.5 border-b border-neutral-800/50 cursor-pointer bg-violet-700 hover:bg-violet-900 transition-colors rounded-md"
                          id={String(s.id)}
                          onClick={() => changeStatusUser(s.id)}
                        >
                          {/* Contenedor de la izquierda */}
                          <div className="flex items-center gap-2 min-w-0">
                            {/* Componente dinámico: shrink-0 evita que se aplaste */}
                            <div className="shrink-0">{extraInfoStatus(s.id)}</div>

                            {/* Nombre */}
                            <span className="text-xs truncate capitalize">{s.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Fin de la primera seccion */}
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
          {/* FIN */}
        </div>
      )}
    </li>
  );
};

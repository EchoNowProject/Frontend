import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
import { ArrowDoubleLeft, MenuHamburger1, Plus } from '@icons/index';
import { Server, Group, Profile, Microphone, Headphone } from './components';

export default function Home() {
  const [stateSidebar, setStateSidebar] = useState<boolean>(false);
  const navigate = useNavigate();

  useHotkeys('ctrl+k', (e: Event) => {
    e.preventDefault();
    // Sacar Modal
  });

  const toggleSidebar = () => {
    setStateSidebar(!stateSidebar);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-violet-700 h-10 flex items-center text-sm">
        <nav className="px-4 sm:px-6 flex items-center h-full w-full">
          <div className="w-full flex items-center gap-x-2">
            {/* ================= BOTÓN DE HAMBURGUESA (MÓVIL) ================= */}
            <button
              type="button"
              className="lg:hidden text-white"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <MenuHamburger1 className="size-5" /> {/* Usa un icono de menú/hamburguesa */}
            </button>

            {/* ================= IZQUIERDA ================= */}
            <ul className="flex items-center gap-1.5 shrink-0">
              <Server />
              {/* Separadaor */}
              <Group />
            </ul>

            {/* ================= CENTRO (SEARCH) ================= */}
            <ul className="hidden lg:flex flex-1 justify-center px-4">
              <li className="w-full max-w-xl">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search"
                    className="h-7 w-full px-2 pr-16 text-xs text-white bg-violet-800 border border-neutral-800 rounded-md focus:outline-none"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] uppercase px-1.5 py-0.5 rounded bg-violet-400/50 text-black">
                    Ctrl + K
                  </span>
                </div>
              </li>
            </ul>

            {/* ================= DERECHA ================= */}

            <ul className="flex flex-row items-center gap-x-3 ms-auto">
              <li className="hidden lg:inline-flex items-center gap-1.5 relative text-gray-500 pe-3 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12">
                <button
                  type="button"
                  className="flex items-center gap-x-1.5 py-2 px-2.5 font-medium text-xs bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    className="shrink-0 size-4 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                  Ask AI
                </button>
              </li>

              {/* Microfono */}
              <Microphone />

              {/* HeadPhone */}
              <Headphone />

              {/* Profile */}
              <Profile />
            </ul>
          </div>
        </nav>
      </header>

      <div className="pt-12 h-screen bg-neutral-900 text-white">
        <div className="flex flex-col lg:flex-row h-full px-3 pb-3 gap-3">
          {/* ============ SIDEBAR ============ */}
          <section
            className={`
              fixed top-10 bottom-0 left-0 z-40
              lg:static
              flex flex-col
              h-full
              w-64 min-w-10
              ${stateSidebar ? 'translate-x-0 lg:w-64' : '-translate-x-full lg:w-15'}
              lg:translate-x-0
              bg-neutral-900 lg:bg-neutral-800
              p-2
              lg:rounded-lg
              lg:border-2 lg:border-violet-600   
              transition-all duration-300 ease-in-out`}
          >
            {/* Contenedor */}
            <div className="flex flex-col h-full w-full wrap-break-word overflow-hidden">
              {/* ============ Chats  y Servers ============ */}

              <div className="h-full">
                {/* ============ Boton de mas servers ============ */}
                <div className="flex flex-col">
                  <button
                    onClick={() => navigate('server/new')}
                    className="flex justify-center items-center rounded-lg bg-neutral-900/80 p-2"
                  >
                    <Plus color="#fff" />
                    <span className={`ms-2 text-[12px] ${stateSidebar ? 'flex' : 'hidden'}`}>
                      New Server
                    </span>
                  </button>
                  {/* ============ Servers ============ */}
                  <div className="my-2">Side</div>
                </div>
              </div>

              {/* collapase del sidebar (solo visible en LG) */}
              <button
                className="hidden lg:flex flex-row justify-center items-center bg-neutral-900 p-2 rounded-lg text-[10px] mb-2"
                onClick={toggleSidebar}
              >
                <ArrowDoubleLeft rotate={stateSidebar ? 0 : 180} />
                {stateSidebar && <span>Collapse sidebar</span>}
              </button>
            </div>
          </section>

          {/* ============ MAIN ============ */}
          <main
            className="
              flex-1
              flex
              flex-col
              bg-neutral-800
              border-2
              border-violet-600
              shadow-lg
              rounded-lg
              p-2
              w-full
              min-w-10
              wrap-break-word overflow-hidden
            "
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

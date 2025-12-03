import React from 'react';
import './Home.css';
import { ChevronLeft } from '@icons/index';
import { Server, Group } from './components';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-violet-700 text-sm py-2.5">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="w-full flex items-center gap-x-1.5">
            <ul className="flex items-center gap-1.5">
              {/* items de la parte superior izquierda */}

              {/* ------------------------ Servers ------------------------*/}
              <Server />

              {/* Separador */}

              <li className="inline-flex items-center relative text-white pe-1.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-neutral-700 after:rounded-full after:-translate-y-1/2 after:rotate-12"></li>

              {/* ------------------------ Grupos (optional) ------------------------*/}

              {/* <Group /> */}
            </ul>

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

                <a
                  className="flex items-center gap-x-1.5 py-1.5 px-2 text-sm text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  href="#"
                >
                  Docs
                </a>

                <a
                  className="flex items-center gap-x-1.5 py-1.5 px-2 text-sm text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  href="#"
                >
                  API
                </a>
              </li>

              <li className="inline-flex items-center gap-1.5 relative text-gray-500 pe-3 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12">
                <div className="relative inline-flex text-start">
                  <button
                    type="button"
                    className="p-0.5 inline-flex shrink-0 items-center gap-x-3 text-start rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                    aria-label="Dropdown"
                  >
                    <img
                      className="shrink-0 size-7 rounded-full"
                      src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div
        className="
          fixed inset-y-0 start-0 z-40 w-64
          hidden lg:block"
        aria-label="Sidebar"
      >
        <div className="lg:pt-13 relative flex flex-col h-full max-h-full">
          <nav className="p-3 size-full flex flex-col ">
            <div className="flex justify-between">
              {/* Search button */}
              <button
                type="button"
                className="p-1.5 ps-2.5 w-full inline-flex items-center gap-x-2 text-sm rounded-lg bg-neutral-200 border border-violet-600 text-gray-600 hover:border-violet-600 focus:outline-none focus:border-violet-600"
              >
                Search
                <span className="text-[11px] uppercase ms-auto flex items-center gap-x-1 py-px px-1.5 border border-gray-200 rounded-md">
                  Ctrl + K
                </span>
              </button>

              {/* Toggle Sidebar */}
              <button
                type="button"
                className="ms-3 size-8 inline-flex items-center gap-x-1 text-xs rounded-md border border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 focus:outline-none focus:text-gray-800"
              >
                <ChevronLeft />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* CÓDIGO ACTUALIZADO */}
      <main
        className="
        transition-all duration-300 
        pt-14 pb-3 px-3 lg:ps-64 
        bg-neutral-900 
        h-screen flex flex-col
      "
      >
        <div
          id="contenedor"
          className="
            mt-2 
            bg-neutral-800 border-2 border-violet-600 shadow-lg rounded-lg p-5
            h-full w-full flex flex-col
          "
        >
          <div className="flex-1 flex flex-col lg:flex-row text-white">TTEXT</div>
        </div>
      </main>
      {/* FIN DEL CÓDIGO ACTUALIZADO */}
    </>
  );
}

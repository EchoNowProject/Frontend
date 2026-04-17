import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css';
import { MenuHamburger1, Xmark } from '@/icons';

const navigation = [
  { name: 'Información', route: '/' },
  { name: 'Planes', route: '/planes' },
  { name: 'Desarrolladores', route: '#' },
  { name: 'Asistencia', route: '#' },
];

export default function Navbar() {
  return (
    <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-full px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              id="mobile-menu"
              aria-controls="mobile-menu-content"
              aria-label="Toggle navigation"
              data-hs-collapse="#mobile-menu-content"
            >
              <MenuHamburger1
                color="#fff"
                aria-hidden="true"
                className="block size-6 hs-collapse-open:hidden text-white"
              />
              <Xmark aria-hidden="true" className="hidden size-6 hs-collapse-open:block" />
            </button>
          </div>

          {/* Logo y navegación */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-start">
            <div className="flex items-center h-16">
              <img
                src="/assets/images/logo-blanco.png"
                className="h-10 w-auto sm:h-12 lg:h-16"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center h-16">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <NavLink
                    to={item.route}
                    key={item.name}
                    className="options bg-gray-950/50 text-white rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* login */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NavLink to={'/login'}>
              <button className="options ml-3 rounded-full bg-violet-600 px-6 py-1.5 text-xs text-white sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base">
                <b>Iniciar Sesión</b>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Menú móvil (Preline Collapse) */}
      <div
        id="mobile-menu-content"
        className="hs-collapse hidden sm:hidden transition-all duration-300 ease-out"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.route}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

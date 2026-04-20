import { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router';
import { MenuHamburger1, Xmark } from '@/icons';

const navigation = [
  { name: 'Información', route: '/' },
  { name: 'Planes', route: '/planes' },
  { name: 'Desarrolladores', route: '#' },
  { name: 'Asistencia', route: '#' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-full px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón móvil */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus:outline-2 focus:outline-indigo-500"
            >
              {isOpen ? (
                <Xmark className="size-6 text-white" />
              ) : (
                <MenuHamburger1 className="size-6 text-white" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 items-center justify-center sm:justify-start hidden md:flex">
            <img
              src="/assets/images/logo-blanco.png"
              className="h-8 sm:h-10 w-auto lg:h-16"
              alt="Logo"
            />
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navigation.map((item) => (
              <NavLink
                to={item.route}
                key={item.name}
                className="options bg-gray-950/50 text-white rounded-full px-3 lg:px-6 py-2 text-xs sm:text-sm lg:text-lg whitespace-nowrap"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Login */}
          <div className="ml-4 sm:ml-6 lg:ml-10 shrink-0">
            <NavLink to="/login">
              <button className="options rounded-full bg-violet-600 px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base text-white whitespace-nowrap">
                <b>Iniciar Sesión</b>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-gray-900/95 backdrop-blur-md ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 px-4 pt-2 pb-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.route}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-4 py-2 text-base text-gray-300 hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

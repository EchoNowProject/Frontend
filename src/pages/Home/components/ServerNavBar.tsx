import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { MenuMeatballs1, Plus, Settings } from '@icons/index';

import type { Server as ServerType } from '@/types';

interface Props {
  server: ServerType;
}

export const Server = ({ server }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className="inline-flex items-center relative text-gray-200 pe-1.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12">
      <div className="inline-flex justify-center w-full">
        <div ref={menuRef} className="relative inline-flex">
          <div className="flex justify-center">
            <button
              type="button"
              className="p-1.5 flex items-center gap-x-1 font-medium text-sm rounded-lg hover:bg-violet-900 focus:outline-none text-gray-200"
              onClick={() => setOpen((prev) => !prev)}
            >
              {server.name}
              <MenuMeatballs1 />
            </button>
          </div>

          {open && (
            <div className="absolute top-full left-0 mt-2 z-10 w-56 overflow-hidden rounded-xl border border-violet-600 bg-violet-700 shadow-xl">
              <div className="p-1">
                <div className="border-b border-violet-600 pb-1 mb-1">
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-violet-900"
                  >
                    <Settings size={18} />
                    <span>Ajustes del servidor</span>
                  </button>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-violet-900 focus:outline-none"
                  onClick={() => {
                    navigate('/home/server/invite-users');
                  }}
                >
                  <Plus size={18} color="#fff" />
                  <span>Invitar usuario</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

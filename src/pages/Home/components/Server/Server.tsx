import React, { useState } from 'react';
import { MenuMeatballs1 } from '@icons/index';

export default function Server() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="inline-flex items-center relative text-gray-200 pe-1.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12">
        <div className="inline-flex justify-center w-full">
          <div className="relative inline-flex">
            <div className="flex justify-center">
              <button
                type="button"
                className="p-2 flex items-center gap-x-1 font-medium text-sm rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200 text-gray-200"
                aria-label="Dropdown"
              >
                Server
                <MenuMeatballs1 />
              </button>
            </div>

            {/* Mas Opciones */}
            {open && (
              <div className="w-64 transition-[opacity,margin] duration opacity-100 z-20 bg-white border border-gray-200 rounded-xl shadow-xl">
                <div className="p-1">
                  <div className="flex flex-col gap-y-1">
                    <label
                      htmlFor="project-1"
                      className="py-2 px-2.5 group flex justify-start items-center gap-x-3 rounded-lg cursor-pointer text-[13px] text-gray-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    >
                      <span className="grow block text-sm font-medium text-neutral-200">
                        Ajustes del Server
                      </span>
                    </label>
                  </div>
                </div>

                <div className="p-1 border-t border-gray-200">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-2 px-2.5 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Manage projects
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

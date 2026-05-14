import React, { useEffect, useRef, useState } from 'react';
import { MenuMeatballs1 } from '@icons/index';
import { ServerChatConversation } from '@/types';

export const Group = ({ conversation }: { conversation: ServerChatConversation }) => {
  const menuRef = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  // 3. Hook para manejar clics fuera del menú
  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setOpen(false);
    });
  }, [menuRef]);

  return (
    <>
      <li className="inline-flex items-center relative text-gray-200 pe-1.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12">
        <div className="inline-flex justify-center w-full">
          <div className="relative inline-flex">
            <div className="flex justify-center">
              <button
                type="button"
                className="p-1.5 flex items-center gap-x-1 font-medium text-sm rounded-lg hover:bg-violet-900 focus:outline-none text-gray-200"
                onClick={() => setOpen(!open)}
              >
                {conversation.channel_text_name}
                <MenuMeatballs1 />
              </button>
            </div>

            {open && (
              <div
                ref={menuRef}
                className="absolute top-full start-0 mt-2 w-50 z-10 bg-violet-700 border border-violet-700 rounded-xl shadow-xl"
              >
                <div className="p-1">
                  <span className="block pt-2 pb-2 ps-2.5 text-sm text-gray-500 dark:text-neutral-500">
                    Canales (1)
                  </span>

                  <div className="flex flex-col gap-y-1">
                    <label
                      htmlFor="team-1"
                      className="py-2 px-2.5 group flex justify-start items-center gap-x-3 rounded-lg cursor-pointer text-[13px] text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      <svg
                        className="shrink-0 size-4 opacity-100"
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
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="grow">
                        <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                          Canal 1
                        </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="p-1 border-t border-gray-200 dark:border-neutral-700">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-2 px-2.5 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    Añadir Canal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

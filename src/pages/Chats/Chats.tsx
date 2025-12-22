import React from 'react';
import { ToolBarChat } from '@/pages/Home/components';

export const Chat = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto break-all">Chat activo</div>

      {/* Toolbar SOLO en chat */}
      <div className="bg-neutral-900 p-2.5 rounded-md text-[10px] shadow-lg mt-2">
        <ToolBarChat />
      </div>
    </div>
  );
};

import { useChat } from '@/hooks/chat/useChat';
import { User } from '@/icons';
import { TypeConversation } from '@/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Sidebar = ({ stateSidebar }: { stateSidebar: boolean }) => {
  const { openedChats, loadOpenedChats } = useChat();
  const navigate = useNavigate();

  useEffect(() => {
    loadOpenedChats();
  }, []);

  return (
    <>
      <div className="flex flex-col max-w-65 my-1 mb-10 gap-3">
        {openedChats &&
          openedChats.map((participant) => (
            <button
              key={participant.id}
              onClick={() =>
                navigate('/home/chat', {
                  state: {
                    typeConversation: TypeConversation.IndividualChat,
                    userTargetId: participant.user_id,
                  },
                })
              }
              className={`
                flex items-center rounded-lg p-2 w-full
                lg:bg-neutral-900/80 bg-neutral-800
                ${stateSidebar ? 'justify-start' : 'justify-center'}
              `}
            >
              {!stateSidebar ? (
                // Sidebar cerrado → solo inicial centrada
                participant.username.charAt(0)
              ) : (
                // Sidebar abierto → icono izquierda + nombre
                <div className="flex items-center gap-3">
                  <User size={18} color="#fff" />
                  <span>{participant.username}</span>
                </div>
              )}
            </button>
          ))}
      </div>
    </>
  );
};

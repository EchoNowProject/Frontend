import { useChat } from '@/hooks/chat/useChat';
import { User, UserMultiple4 } from '@/icons';
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
          openedChats.map((chat, index) => {
            const isGroup = 'group_name' in chat;
            const name = isGroup ? chat.group_name : chat.username;
            const chatType = isGroup ? TypeConversation.Group : TypeConversation.IndividualChat;
            const targetId = isGroup ? undefined : chat.user_id;
            const convId = isGroup ? chat.id : chat.conversation_id;

            return (
              <button
                key={index}
                onClick={() =>
                  navigate('/home/chat', {
                    state: {
                      typeConversation: chatType,
                      userTargetId: targetId,
                      conversationId: convId,
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
                  name.charAt(0)
                ) : (
                  // Sidebar abierto → icono izquierda + nombre
                  <div className="flex items-center gap-3">
                    {isGroup ? (
                      <UserMultiple4 size={18} color="#fff" />
                    ) : (
                      <User size={18} color="#fff" />
                    )}
                    <span>{name}</span>
                  </div>
                )}
              </button>
            );
          })}
      </div>
    </>
  );
};

import { useChat } from '@/hooks/chat/useChat';
import { useServer } from '@/hooks/useServer';
import { Server, User, UserMultiple4 } from '@/icons';
import { TypeConversation } from '@/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Sidebar = ({ stateSidebar }: { stateSidebar: boolean }) => {
  const { openedChats, loadOpenedChats } = useChat();
  const { servers } = useServer();
  const navigate = useNavigate();

  useEffect(() => {
    loadOpenedChats();
  }, []);

  return (
    <div className="flex flex-col max-w-65 my-1 mb-10 gap-3">
      {/* CHATS */}
      {openedChats?.map((chat, index) => {
        const isGroup = 'group_name' in chat;
        const name = isGroup ? chat.group_name : chat.username;
        const chatType = isGroup ? TypeConversation.Group : TypeConversation.IndividualChat;

        const targetId = isGroup ? undefined : chat.user_id;
        const convId = isGroup ? chat.id : chat.conversation_id;

        return (
          <button
            key={`chat-${index}`}
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
            transition-all duration-200
            hover:bg-neutral-700
            ${stateSidebar ? 'justify-start' : 'justify-center'}
          `}
          >
            {!stateSidebar ? (
              name.charAt(0)
            ) : (
              <div className="flex items-center gap-3">
                {isGroup ? (
                  <UserMultiple4 size={18} color="#fff" />
                ) : (
                  <User size={18} color="#fff" />
                )}

                <span className="truncate">{name}</span>
              </div>
            )}
          </button>
        );
      })}

      {/* SEPARADOR */}
      {openedChats && openedChats.length > 0 && servers.length > 0 && (
        <div
          className={`
          border-t border-white/20
          transition-all duration-300
          ${stateSidebar ? 'mx-2 my-2' : 'mx-0 my-1'}
        `}
        />
      )}

      {/* SERVERS */}
      {servers?.map((server, index) => (
        <button
          key={`server-${index}`}
          onClick={() =>
            navigate('/home/chat', {
              state: {
                //!terminar
                typeConversation: TypeConversation.Server,
              },
            })
          }
          className={`
          flex items-center rounded-lg p-2 w-full
          lg:bg-neutral-900/80 bg-neutral-800
          transition-all duration-200
          hover:bg-neutral-700
          ${stateSidebar ? 'justify-start' : 'justify-center'}
        `}
        >
          {!stateSidebar ? (
            server.name.charAt(0)
          ) : (
            <div className="flex items-center gap-3">
              <Server />
              <span className="truncate">{server.name}</span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

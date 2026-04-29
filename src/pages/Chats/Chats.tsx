import { useChat } from '@/hooks/useChat';
import { useUser } from '@/hooks/user/useUser';
import { useIndividualChatWS } from '@/websockets/Chats/useIndividualChatWS';
import { User } from '@/icons';
import { ToolBarChat } from '@/pages/Home/components';
import { ChatLocationState } from '@/types';
import useEcho from '@/websockets/useEcho';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const Chat = () => {
  const location = useLocation() as { state: ChatLocationState };
  const echo = useEcho();

  const typeConversation = location.state.typeConversation;
  const userTargetId = location.state.userTargetId;

  const {
    getChat,
    previousMessages,
    userInvolved,
    message,
    setMessage,
    sendMessageToolbar,
    setPreviousMessages,
  } = useChat();
  const { conectIndividualChatWebsocket } = useIndividualChatWS();
  const { user } = useUser();

  useEffect(() => {
    getChat(typeConversation!);
  }, []);

  useEffect(() => {
    conectIndividualChatWebsocket(setPreviousMessages);
  }, [echo, user?.id]);

  // Componente Avatar
  const AvatarComponent = ({ isMine }: { isMine: boolean }) => {
    //Control de icono / Imagen
    const currentUser = isMine ? user : userInvolved;
    const avatarBase64 = currentUser?.file_avatar_image?.base64;

    return (
      <>
        {avatarBase64 ? (
          <img
            src={`data:image/png;base64,${avatarBase64}`}
            alt="avatar"
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg object-cover ${
              isMine ? 'right-2' : 'left-2'
            }`}
          />
        ) : (
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center ${
              isMine ? 'bg-violet-400 right-2' : 'bg-neutral-800 left-2'
            }`}
          >
            <User color={isMine ? '#343C54' : '#8e51ff'} size={25} />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto flex flex-col justify-end mb-5 py-2">
        <div className="flex flex-col gap-2 space-y-2 px-4 md:px-10 lg:px-60 break-all">
          {previousMessages &&
            previousMessages?.map((message) => {
              const isMine = message.user_sender_id === user?.id;

              return (
                <div
                  key={message.id}
                  className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`relative px-3 py-2 rounded-xl max-w-[75%] text-sm shadow ${
                      isMine ? 'bg-violet-500 text-white' : 'bg-neutral-900 text-white'
                    } ${isMine ? 'pr-18' : 'pl-18'}`} // más espacio
                  >
                    {/* Avatar dentro */}
                    <AvatarComponent isMine={isMine} />

                    <p>{message.content}</p>

                    <span
                      className={`block text-[10px] mt-1 text-right ${
                        isMine ? 'text-neutral-200' : 'text-neutral-400'
                      }`}
                    >
                      {message.shipping_time}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Toolbar (sin cambios) */}
      <div className="bg-neutral-900 p-2.5 rounded-md text-[10px] shadow-lg mt-2">
        <ToolBarChat
          idFriend={userTargetId}
          message={message}
          setMessage={setMessage}
          sendMessageToolbar={sendMessageToolbar}
        />
      </div>
    </div>
  );
};

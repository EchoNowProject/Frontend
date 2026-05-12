import { useChat } from '@/hooks/chat/useChat';
import { useUser } from '@/hooks/user/useUser';
import { User, Xmark, Download } from '@/icons';
import { ToolBarChat } from './ToolBarChat';
import { ChatLocationState } from '@/types';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { useFile } from '@/hooks/utils/useFile';

export const Chat = () => {
  const location = useLocation() as { state: ChatLocationState };
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const typeConversation = location.state.typeConversation;
  const conversationId = location.state.conversationId;

  const {
    getChat,
    previousMessages,
    userInvolved,
    message,
    setMessage,
    sendMessageToolbar,
    files,
    setFiles,
  } = useChat();

  const { user } = useUser();
  const { donwloadMessageFile } = useFile();

  useEffect(() => {
    if (!typeConversation || !conversationId) return;

    getChat(typeConversation, conversationId);
  }, [typeConversation, conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [previousMessages]);

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

  // Componente de previsualización de archivos
  const FilePreviewComponent = () => {
    if (!files || files.length === 0) return null;

    return (
      <div className="flex gap-4 overflow-x-auto p-3 bg-neutral-900 rounded-md mt-2 shadow-lg scrollbar-hide">
        {files.map((file, index) => {
          const isImage = file.base64.startsWith('data:image/');
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center relative bg-neutral-800 rounded-md p-2 min-w-22.5 w-22.5 h-22.5 shrink-0 border border-neutral-700"
            >
              <button
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center shadow-md transition-colors"
                onClick={() => setFiles((prev) => prev?.filter((_, i) => i !== index))}
                title="Quitar archivo"
              >
                <Xmark size={12} color="#fff" />
              </button>
              {isImage ? (
                <img
                  src={file.base64}
                  alt={file.name}
                  className="w-12 h-12 object-cover rounded-md mb-1"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center bg-neutral-700 rounded-md mb-1">
                  <span className="text-[10px] text-neutral-400 font-semibold">DOC</span>
                </div>
              )}
              <span
                className="text-[10px] text-neutral-300 w-full truncate text-center"
                title={file.name}
              >
                {file.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto min-h-0 mb-5 py-2 scrollbar-hide">
        <div className="min-h-full flex flex-col justify-end">
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
                      {!isMine && <p className="text-xs my-2">{message?.user_sender_name}</p>}
                      <p>{message.content}</p>

                      {message.files_message?.map((file, index) => (
                        <button
                          key={index}
                          className={`flex items-center gap-2 mt-2 p-2 rounded-lg w-fit cursor-pointer transition-colors shadow-sm border border-transparent ${
                            isMine
                              ? 'bg-violet-600 hover:bg-violet-700 border-violet-500'
                              : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700'
                          }`}
                          title="Descargar archivo"
                          onClick={() => donwloadMessageFile(file.path_file)}
                        >
                          <Download size={16} color="#ffffff" />
                          <span className="text-xs text-white font-medium">{file.file_name}</span>
                        </button>
                      ))}

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

          <div id="referencieBootom" ref={bottomRef} />
        </div>
      </div>

      <FilePreviewComponent />

      {/* Toolbar (sin cambios) */}
      <div className="bg-neutral-900 p-2.5 rounded-md shadow-lg mt-2 text-sm">
        <ToolBarChat
          conversationId={conversationId!}
          message={message}
          setMessage={setMessage}
          files={files}
          typeConversation={typeConversation}
          setFiles={setFiles}
          sendMessageToolbar={sendMessageToolbar}
        />
      </div>
    </div>
  );
};

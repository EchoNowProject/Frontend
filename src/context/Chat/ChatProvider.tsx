import { ReactNode, useState } from 'react';
import { ChatContext } from './ChatContext';
import { getIntividualChats, getIndividualChatMessagesApi } from '@/api/Chat/IndividualChatApi';
import { getGroupChats, getGroupChatMessagesApi } from '@/api/Chat/GroupsChatApi';
import { sendMessageApi } from '@/api/Chat/ChatGeneralApi';
import {
  IndividualChatConversationParticipant,
  Message,
  TypeConversation,
  FileData,
  SidebarChat,
  GroupsChatConversation,
} from '@/types';
import { useLoading } from '@/hooks/useLoading';
import { useIndividualChatWS } from '@/websockets/Chats/useIndividualChatWS';
import { useGroupChatWS } from '@/websockets/Chats/useGroupChatWS';

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>();
  const [previousMessages, setPreviousMessages] = useState<Message[]>();
  const [userInvolved, setUserInvolved] = useState<IndividualChatConversationParticipant>();
  const [conversation, setConversation] = useState<GroupsChatConversation>();
  const [files, setFiles] = useState<FileData[]>();
  const [openedChats, setOpenedChats] = useState<SidebarChat[]>();

  const { setShowLoading } = useLoading();

  useIndividualChatWS(setPreviousMessages, userInvolved?.user_id);
  useGroupChatWS(setPreviousMessages, conversation?.id);

  /**
   * Carga los chats abiertos del usuario.
   */
  const loadOpenedChats = async () => {
    try {
      // Ejecuta ambas peticiones en paralelo y espera a que terminen (ya sea con éxito o error)
      const [individualChatsResult, groupChatsResult] = await Promise.allSettled([
        getIntividualChats(), // Petición a la API para obtener los chats individuales
        getGroupChats(), // Petición a la API para obtener los chats de grupo
      ]);

      // Si la petición de chats individuales fue exitosa, extrae su valor; de lo contrario, asigna un array vacío
      const individualChats =
        individualChatsResult.status === 'fulfilled' ? individualChatsResult.value : [];

      // Si la petición de chats de grupo fue exitosa, extrae su valor; de lo contrario, asigna un array vacío
      const groupChats = groupChatsResult.status === 'fulfilled' ? groupChatsResult.value : [];

      // Combina ambos arrays de chats (individuales y de grupo) y actualiza el estado
      setOpenedChats([...individualChats, ...groupChats]);
    } catch (error) {
      // Captura y registra en consola cualquier error inesperado durante el proceso
      console.log(error);
    }
  };

  const getChat = async (typeChat: TypeConversation, conversationId: number) => {
    let response = undefined;
    try {
      setShowLoading(true);
      setPreviousMessages(undefined);
      setUserInvolved(undefined);
      setConversation(undefined);
      switch (typeChat) {
        case TypeConversation.IndividualChat:
          response = await getIndividualChatMessagesApi(conversationId);
          setPreviousMessages(response.messages);
          setUserInvolved(response.userInvolved);
          break;
        case TypeConversation.Group:
          response = await getGroupChatMessagesApi(conversationId);
          setPreviousMessages(response.messages);
          setConversation(response.conversation);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
    setShowLoading(false);
  };

  const sendMessageToolbar = async (conversationId: number, typeConversation: TypeConversation) => {
    const trimmedMessage = message?.trim() || '';

    const hasMessage = trimmedMessage.length > 0;
    const hasFiles = (files?.length || 0) > 0;

    if (!hasMessage && !hasFiles) return;

    try {
      const lastMessage = await sendMessageApi(
        conversationId,
        typeConversation,
        trimmedMessage,
        files
      );

      setPreviousMessages((prev) => [...(prev || []), lastMessage]);

      // limpiar después de enviar
      setMessage('');
      setFiles([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        getChat,
        setMessage,
        message,
        userInvolved,
        conversation,
        setUserInvolved,
        previousMessages,
        sendMessageToolbar,
        setPreviousMessages,
        files,
        setFiles,
        openedChats,
        setOpenedChats,
        loadOpenedChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

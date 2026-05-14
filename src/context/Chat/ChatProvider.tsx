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
  ServerChatConversation,
} from '@/types';
import { useLoading } from '@/hooks/useLoading';
import { useIndividualChatWS } from '@/websockets/Chats/useIndividualChatWS';
import { useGroupChatWS } from '@/websockets/Chats/useGroupChatWS';
import { getServerChatMessagesApi } from '@/api/Chat/ServerChatApi';
import { getServer } from '@/api/ServerApi';
import { useServer } from '@/hooks/useServer';

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>();
  const [previousMessages, setPreviousMessages] = useState<Message[]>();
  const [userInvolved, setUserInvolved] = useState<IndividualChatConversationParticipant>();
  const [conversation, setConversation] = useState<
    GroupsChatConversation | ServerChatConversation
  >();
  const [files, setFiles] = useState<FileData[]>();
  const [openedChats, setOpenedChats] = useState<SidebarChat[]>();
  const [typeConversation, setTypeConversation] = useState<TypeConversation>();
  //! crear variable para guardar el tipo de chat y usarlo en los ShowActive

  const { setShowLoading } = useLoading();
  const { setServer } = useServer();

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

  const getChat = async (typeChat: TypeConversation, conversationId: number, serverId?: number) => {
    try {
      setShowLoading(true);
      setPreviousMessages(undefined);
      setUserInvolved(undefined);
      setConversation(undefined);
      setTypeConversation(undefined);

      await assignTasks(typeChat, conversationId, serverId);
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

  const assignTasks = async (
    typeChat: TypeConversation,
    conversationId: number,
    serverId?: number
  ) => {
    let response = null;

    switch (typeChat) {
      case TypeConversation.IndividualChat:
        response = await getIndividualChatMessagesApi(conversationId);
        setPreviousMessages(response.messages);
        setUserInvolved(response.userInvolved);
        setTypeConversation(TypeConversation.IndividualChat);
        break;
      case TypeConversation.Group:
        response = await getGroupChatMessagesApi(conversationId);
        setPreviousMessages(response.messages);
        setConversation(response.conversation);
        setTypeConversation(TypeConversation.Group);
        break;
      case TypeConversation.Server:
        if (!serverId) return;
        response = await getServerChatMessagesApi(conversationId, serverId);
        let server = await getServer(serverId);
        setServer(server);
        setConversation(response.conversation);
        setTypeConversation(TypeConversation.Server);
        break;
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
        typeConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

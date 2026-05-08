import React, { ReactNode, useState } from 'react';
import { ChatContext } from './ChatContext';
import { getIntividualChats, getMessagesApi, sendMessageApi } from '@/api/Chat/IndividualChatApi';
import {
  IndividualChatConversationParticipant,
  Message,
  TypeConversation,
  FileData,
} from '@/types';
import { useLoading } from '@/hooks/useLoading';
import { useIndividualChatWS } from '@/websockets/Chats/useIndividualChatWS';

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>();
  const [previousMessages, setPreviousMessages] = useState<Message[]>();
  const [userInvolved, setUserInvolved] = useState<IndividualChatConversationParticipant>();
  const [files, setFiles] = useState<FileData[]>();
  const [openedChats, setOpenedChats] = useState<IndividualChatConversationParticipant[]>();

  const { setShowLoading } = useLoading();

  useIndividualChatWS(setPreviousMessages, userInvolved?.user_id);

  const loadOpenedChats = async () => {
    try {
      const chats = await getIntividualChats();
      setOpenedChats(chats);
    } catch (error) {
      console.log(error);
    }
  };

  const getChat = async (typeChat: TypeConversation, conversationId: number) => {
    try {
      setShowLoading(true);
      setPreviousMessages(undefined);
      setUserInvolved(undefined);
      switch (typeChat) {
        case TypeConversation.IndividualChat:
          let response = await getMessagesApi(conversationId);
          setPreviousMessages(response.messages);
          setUserInvolved(response.userInvolved);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
    setShowLoading(false);
  };

  const sendMessageToolbar = async (conversationId: number) => {
    const trimmedMessage = message?.trim() || '';

    const hasMessage = trimmedMessage.length > 0;
    const hasFiles = (files?.length || 0) > 0;

    if (!hasMessage && !hasFiles) return;

    try {
      const lastMessage = await sendMessageApi(conversationId, trimmedMessage, files);
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

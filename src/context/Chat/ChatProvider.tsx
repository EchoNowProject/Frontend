import React, { ReactNode, useState } from 'react';
import { ChatContext } from './ChatContext';
import { getMessagesApi, sendMessageApi } from '@/api/Chat/IndividualChatApi';
import { ConversationParticipant, Message, TypeConversation, FileData } from '@/types';
import { useLoading } from '@/hooks/useLoading';

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>();
  const [previousMessages, setPreviousMessages] = useState<Message[]>();
  const [userInvolved, setUserInvolved] = useState<ConversationParticipant>();
  const [files, setFiles] = useState<FileData[]>();

  const { setShowLoading } = useLoading();

  const getChat = async (typeChat: TypeConversation, userTarget: number) => {
    try {
      setShowLoading(true);
      switch (typeChat) {
        case TypeConversation.IndividualChat:
          let response = await getMessagesApi(userTarget); // ! reocgerlo $request-query('taltal')
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

  const sendMessageToolbar = async (idFriend: number) => {
    const trimmedMessage = message?.trim() || '';

    const hasMessage = trimmedMessage.length > 0;
    const hasFiles = (files?.length || 0) > 0;

    if (!hasMessage && !hasFiles) return;

    try {
      const lastMessage = await sendMessageApi(idFriend, trimmedMessage, files);
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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

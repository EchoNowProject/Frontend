import { getMessagesApi, sendMessageApi } from '@/api/Chat/IndividualChatApi';
import { ConversationParticipant, Message, TypeConversation, User } from '@/types';
import { useState } from 'react';
import { useLoading } from './useLoading';

export const useChat = () => {
  const [message, setMessage] = useState<string>();
  const [previousMessages, setPreviousMessages] = useState<Message[]>();
  const [userInvolved, setuserInvolved] = useState<ConversationParticipant>();
  const [filesBase64, setFilesBase64] = useState<string[]>();

  const { setShowLoading } = useLoading();

  const getChat = async (typeChat: TypeConversation) => {
    try {
      setShowLoading(true);
      switch (typeChat) {
        case TypeConversation.IndividualChat:
          let response = await getMessagesApi();
          setPreviousMessages(response.messages);
          setuserInvolved(response.userInvolved);
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
    const hasFiles = (filesBase64?.length || 0) > 0;

    if (!hasMessage && !hasFiles) return;

    try {
      const lastMessage = await sendMessageApi(idFriend, trimmedMessage, filesBase64);
      setPreviousMessages((prev) => [...(prev || []), lastMessage]);

      // limpiar después de enviar
      setMessage('');
      setFilesBase64([]);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getChat,
    setMessage,
    message,
    userInvolved,
    previousMessages,
    sendMessageToolbar,
    setPreviousMessages,
    filesBase64,
    setFilesBase64,
  };
};

import { getMessagesApi, sendMessageApi } from '@/api/Chat/IndividualChatApi';
import { ConversationParticipant, Message, TypeConversation, User } from '@/types';
import { useState } from 'react';
import { useLoading } from './useLoading';

export const useChat = () => {
  const [message, setMessage] = useState<string>();
  const [previousMessages, setPreviousMessages] = useState<Message[]>();
  const [userInvolved, setuserInvolved] = useState<ConversationParticipant>();

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
    setMessage('');
    setMessage((prev) => prev?.trim());
    if (message != undefined)
      try {
        const lastMessage = await sendMessageApi(message, idFriend);
        setPreviousMessages((prev) => [...(prev || []), lastMessage]);
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
  };
};

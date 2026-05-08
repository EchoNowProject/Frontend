import {
  IndividualChatConversationParticipant,
  FileData,
  Message,
  IndividualChatConversation,
} from '@/types';
import axios, { AxiosError, AxiosResponse } from '../axios';

interface GetMessageResponse {
  messages: Message[];
  userInvolved: IndividualChatConversationParticipant;
}

export const getIntividualChats = async (): Promise<IndividualChatConversationParticipant[]> => {
  return axios
    .get('/individual-chat/get-chats')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const sendMessageApi = async (
  conversationId: number,
  message?: string,
  files?: FileData[]
): Promise<Message> => {
  return axios
    .post('/individual-chat/send-message', {
      data: {
        message: message ?? null,
        conversationId: conversationId,
        files: files ?? null,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getMessagesApi = async (conversationId: number): Promise<GetMessageResponse> => {
  return axios
    .get('/individual-chat/get-messages', {
      params: {
        conversation_id: conversationId,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const createConversationIfNeccesary = async (
  friendId: number
): Promise<IndividualChatConversation> => {
  return axios
    .post('/individual-chat/create-conversation', {
      data: {
        friendId: friendId,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

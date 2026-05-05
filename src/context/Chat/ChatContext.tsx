import { ConversationParticipant, Message, TypeConversation, FileData } from '@/types';
import { createContext } from 'react';

export interface ChatContextProps {
  message: string | undefined;
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  previousMessages: Message[] | undefined;
  setPreviousMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
  userInvolved: ConversationParticipant | undefined;
  setUserInvolved: React.Dispatch<React.SetStateAction<ConversationParticipant | undefined>>;
  files: FileData[] | undefined;
  setFiles: React.Dispatch<React.SetStateAction<FileData[] | undefined>>;
  getChat: (typeChat: TypeConversation) => Promise<void>;
  sendMessageToolbar: (idFriend: number) => Promise<void>;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

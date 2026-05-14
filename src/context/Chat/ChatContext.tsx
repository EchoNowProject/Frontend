import {
  IndividualChatConversationParticipant,
  Message,
  TypeConversation,
  FileData,
  SidebarChat,
  GroupsChatConversation,
  ServerChatConversation,
} from '@/types';
import { createContext } from 'react';

export interface ChatContextProps {
  message: string | undefined;
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  previousMessages: Message[] | undefined;
  setPreviousMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
  userInvolved: IndividualChatConversationParticipant | undefined;
  conversation: GroupsChatConversation | ServerChatConversation | undefined;
  setUserInvolved: React.Dispatch<
    React.SetStateAction<IndividualChatConversationParticipant | undefined>
  >;
  files: FileData[] | undefined;
  setFiles: React.Dispatch<React.SetStateAction<FileData[] | undefined>>;
  openedChats: SidebarChat[] | undefined;
  setOpenedChats: React.Dispatch<React.SetStateAction<SidebarChat[] | undefined>>;
  typeConversation: TypeConversation | undefined;
  getChat: (typeChat: TypeConversation, conversationId: number, serverId?: number) => Promise<void>;
  sendMessageToolbar: (conversationId: number, typeConversation: TypeConversation) => Promise<void>;
  loadOpenedChats: () => void;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

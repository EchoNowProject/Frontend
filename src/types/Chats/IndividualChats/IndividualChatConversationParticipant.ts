import { type FileImage } from '@/types';

export interface IndividualChatConversationParticipant {
  id: number;
  conversation_id: number;
  user_id: number;
  username: string;
  //participant_role: null;
  last_read_at: string;
  avatar_image: string;
  joined_at: string;
  file_avatar_image: FileImage | null;
}

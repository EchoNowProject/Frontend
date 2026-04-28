import { type FileImage } from '@/types';

export interface ConversationParticipant {
  id: number;
  conversation_id: number;
  user_id: number;
  participant_role: null;
  last_read_at: null;
  avatar_image: string;
  joined_at: string;
  file_avatar_image: FileImage | null;
}

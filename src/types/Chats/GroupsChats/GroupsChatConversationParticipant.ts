export interface GroupsChatConversationParticipant {
  id: number;
  conversation_id: number;
  user_id: number;
  //participant_role: null;
  username: string;
  last_read_at: string | Date;
  avatar_image: string;
  joined_at: string;
}

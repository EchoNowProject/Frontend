export interface Message {
  id: number;
  conversation_id: number;
  user_sender_id: number;
  content: string;
  type_msg: null;
  file: null;
  read_by: null;
  created_at: string;
  updated_at: string;
  shipping_time: string; // Atribute
}

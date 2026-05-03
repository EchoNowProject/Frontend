export interface Message {
  id: number;
  conversation_id: number;
  user_sender_id: number;
  content: string;
  type_msg: number;
  has_file: boolean;
  read_by: Object;
  created_at: string;
  updated_at: string;
  shipping_time: string; // Atribute
}

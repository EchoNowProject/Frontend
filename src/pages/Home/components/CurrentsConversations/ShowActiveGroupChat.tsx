import { useChat } from '@/hooks/chat/useChat';
import { UserMultiple4 } from '@/icons';
import { GroupsChatConversation, TypeConversation } from '@/types';

export const ShowActiveGroupChat = () => {
  const { typeConversation, conversation } = useChat();

  const isGroupConversation = typeConversation === TypeConversation.Group;

  if (!isGroupConversation || !conversation) {
    return null;
  }

  const groupConversation = conversation as GroupsChatConversation;

  return (
    <div className="flex justify-center">
      <span className="p-1.5 ms-2 flex items-center gap-x-1 font-medium text-xs rounded-lg bg-violet-900 text-neutral-400">
        <UserMultiple4 size={15} color="#000" />
        {groupConversation.group_name}
      </span>
    </div>
  );
};

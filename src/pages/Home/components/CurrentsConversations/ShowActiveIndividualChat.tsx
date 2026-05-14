import { useChat } from '@/hooks/chat/useChat';
import { User } from '@/icons';
import { TypeConversation } from '@/types';

export const ShowActiveUser = () => {
  const { typeConversation, userInvolved } = useChat();

  return (
    <>
      {typeConversation === TypeConversation.IndividualChat && (
        <div className="flex justify-center">
          <span className="p-1.5 ms-2 flex items-center gap-x-1 font-medium text-xs rounded-lg bg-violet-900 text-neutral-400">
            <User size={15} color="#000" />
            {userInvolved?.username}
          </span>
        </div>
      )}
    </>
  );
};

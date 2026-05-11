import { useChat } from '@/hooks/chat/useChat';
import { User } from '@/icons';

export const ShowActiveUser = () => {
  const { userInvolved } = useChat();

  return (
    <>
      {userInvolved && (
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

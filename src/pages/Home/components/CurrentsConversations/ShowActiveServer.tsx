import { useChat } from '@/hooks/chat/useChat';
import { useServer } from '@/hooks/useServer';
import { Group, Server } from '@/pages/Home/components';
import { ServerChatConversation, TypeConversation } from '@/types';

export const ShowActiveServer = () => {
  const { server } = useServer();
  const { conversation, typeConversation } = useChat();

  if (typeConversation !== TypeConversation.Server || !conversation) {
    return null;
  }

  const serverConversation = conversation as ServerChatConversation;

  return (
    <ul className="flex items-center gap-1.5 shrink-0">
      <Server server={server} />
      <Group conversation={serverConversation} />
    </ul>
  );
};

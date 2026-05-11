import useEcho from '../useEcho';
import { useUser } from '@/hooks/user/useUser';
import { GroupChatResponseWebsocket, Message } from '@/types';

import { useEffect } from 'react';

export const useGroupChatWS = (
  setPreviousMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>,
  idConversation?: number
) => {
  const echo = useEcho();

  useEffect(() => {
    if (!echo || !idConversation) return;

    const channel = echo.private(`group-chat.${idConversation}`);

    channel.subscribed(() => {
      channel.listen('.TestEvent', (e: any) => {
        console.log('📡 Evento:', e.message);
      });
    });

    channel.error((err: any) => {
      console.error('Error en suscripción:', err);
    });

    channel.listen('.group-chat', (response: GroupChatResponseWebsocket) => {
      console.log(response);
      if (response?.conversationId == idConversation) {
        setPreviousMessages((prev) => {
          return [...(prev || []), response.message];
        });
      }
    });

    // Limpieza al desmontar
    return () => {
      echo.leave(`group-chat.${idConversation}`);
    };
  }, [echo, idConversation, setPreviousMessages]);
};

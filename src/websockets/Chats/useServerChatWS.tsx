import useEcho from '../useEcho';
import { useUser } from '@/hooks/user/useUser';
import { ServerChatResponseWebsocket, Message } from '@/types';

import { useEffect } from 'react';

export const useServerChatWS = (
  setPreviousMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>,
  idServer?: number,
  idConversation?: number
) => {
  const echo = useEcho();
  const { user } = useUser();

  useEffect(() => {
    if (!echo || !idServer || !idConversation || !user?.id) return;

    const channelName = `server-chat.${idServer}.${idConversation}`;
    const channel = echo.private(channelName);

    channel.subscribed(() => {
      console.log(`Suscrito a ${channelName}`);
    });

    channel.error((err: any) => {
      console.error('Error en suscripción:', err);
    });

    channel.listen('.server-chat', (response: ServerChatResponseWebsocket) => {
      console.log(response);
      if (
        response?.idServer == idServer &&
        response?.idConversation == idConversation &&
        response?.message?.user_sender_id !== user?.id
      ) {
        setPreviousMessages((prev) => {
          return [...(prev || []), response.message];
        });
      }
    });

    // Limpieza al desmontar
    return () => {
      echo.leave(channelName);
    };
  }, [echo, idServer, idConversation, setPreviousMessages, user?.id]);
};

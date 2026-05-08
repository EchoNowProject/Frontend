import useEcho from '../useEcho';
import { useUser } from '@/hooks/user/useUser';
import { IndividualChatResponseWebsocket, Message } from '@/types';

import { useEffect } from 'react';

export const useIndividualChatWS = (
  setPreviousMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>,
  idUserInvolved?: number
) => {
  const echo = useEcho();
  const { user } = useUser();

  useEffect(() => {
    if (!echo || !user?.id || !idUserInvolved) return;

    const channel = echo.private(`individual-chat.${user.id}`);

    channel.subscribed(() => {
      channel.listen('.TestEvent', (e: any) => {
        console.log('📡 Evento:', e.message);
      });
    });

    channel.error((err: any) => {
      console.error('Error en suscripción:', err);
    });

    channel.listenToAll((event: any, response: IndividualChatResponseWebsocket) => {
      if (response?.message?.user_sender_id == idUserInvolved) {
        setPreviousMessages((prev) => {
          return [...(prev || []), response.message];
        });
      }
    });

    // Limpieza al desmontar
    return () => {
      echo.leave(`individual-chat.${user.id}`);
    };
  }, [echo, user?.id, idUserInvolved, setPreviousMessages]);
};

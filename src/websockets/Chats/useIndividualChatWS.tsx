import useEcho from '../useEcho';
import { useUser } from '@/hooks/user/useUser';
import { IndividualChatResponseWebsocket, Message } from '@/types';

export const useIndividualChatWS = () => {
  const echo = useEcho();
  const { user } = useUser();

  /**
   * Conexion de websocket para las solicitudes de amistad
   * ? Es necesario utilizar el setPreviousMessages que se le pasa por parametro porque si usamos el del hook de useChats no actualiza los datos
   * @returns Toast en el dispositivo destinatario
   */
  const conectIndividualChatWebsocket = (
    setPreviousMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>
  ) => {
    if (!echo || !user?.id) return;

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
      setPreviousMessages((prev) => {
        return [...(prev || []), response.message];
      });
    });

    // Limpieza al desmontar
    return () => {
      echo.leave(`individual-chat.${user.id}`);
    };
  };

  return { conectIndividualChatWebsocket };
};

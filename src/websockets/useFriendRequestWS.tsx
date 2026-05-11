import useEcho from './useEcho';
import { useUser } from '@/hooks/user/useUser';
import { useToast } from '@/hooks/useToast';
import { FriendRequestResponseWebsocket } from '@/types';

export const useFriendRequestWS = () => {
  const echo = useEcho();
  const { user } = useUser();
  const { initiateToast } = useToast();

  /**
   * Conexion de websocket para las solicitudes de amistad
   * @returns Toast en el dispositivo destinatario
   */
  const conectFriendRequestWebsocket = () => {
    if (!echo || !user?.id) return;

    const channel = echo.private(`friend-request.${user.id}`);

    channel.subscribed(() => {
      channel.listen('.TestEvent', (e: any) => {
        console.log('📡 Evento:', e.message);
      });
    });

    channel.error((err: any) => {
      console.error('Error en suscripción:', err);
    });

    channel.listen('.friend-request', (data: FriendRequestResponseWebsocket) => {
      initiateToast(String(data.message), true);
    });

    // Limpieza al desmontar
    return () => {
      echo.leave(`private-friend-request.${user.id}`);
    };
  };

  return { conectFriendRequestWebsocket };
};

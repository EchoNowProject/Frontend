import { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default function useEcho() {
  const auth = localStorage.getItem('auth');
  const [echo, setEcho] = useState<Echo<'pusher'> | null>(null);

  useEffect(() => {
    let token: string | null = null;

    if (auth) {
      token = JSON.parse(auth)?.token;
    }

    const instance = new Echo({
      broadcaster: 'pusher',
      client: new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
        wsHost: import.meta.env.VITE_PUSHER_HOST,
        wsPort: Number(import.meta.env.VITE_PUSHER_PORT),
        forceTLS: false,
        enabledTransports: ['ws', 'wss'],
        cluster: 'mt1',
        authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',

        auth: {
          headers: {
            'X-CSRF-TOKEN': document
              .querySelector('meta[name="csrf-token"]')
              ?.getAttribute('content'),

            Authorization: `Bearer ${token}`,
          },
        },
      }),
    });

    instance.connector.pusher.connection.bind('connected', () => {
      console.log('✅ Conectado a WebSocket');
    });

    instance.connector.pusher.connection.bind('error', (err: any) => {
      console.error('❌ Error WS:', err);
    });

    setEcho(instance); // 🔥 esto sí dispara re-render

    return () => {
      instance.disconnect();
    };
  }, []);

  return echo;
}

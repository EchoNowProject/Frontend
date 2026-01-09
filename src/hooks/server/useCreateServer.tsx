import { Server, TypeServer } from '@/types';
import { useState } from 'react';
import { createNewServer } from '@/api/ServerApi';
import { useNavigate } from 'react-router-dom';

type ServerAudience = 'community' | 'friends' | null;
const NAMEDEFAULT = 'Servidor de Nombre de Usuario';

export const useCreateServer = () => {
  const navigate = useNavigate();
  const [audience, setAudience] = useState<ServerAudience>();
  const [server, setServer] = useState<Server>({} as Server);

  /* Crear Servidor */
  const createServer = async () => {
    try {
      await createNewServer(server);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const updateNameServer = (value: string): void => {
    setServer((prev) => ({
      ...prev,
      name: value.trim() === '' ? NAMEDEFAULT : value,
    }));
  };

  const updateTypeServer = (value: TypeServer): void => {
    setServer((prev) => ({
      ...prev,
      type_server: value,
    }));
  };

  return {
    /* Propiedades */
    audience,
    server,

    /* Metodos */
    setAudience,
    updateNameServer,
    updateTypeServer,
    createServer,
  };
};

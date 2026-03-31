import { getServersByUser } from '@/api/ServerApi';
import { Server, TypeServer } from '@/types';
import React, { ReactNode, useState } from 'react';
import { createNewServer } from '@/api/ServerApi';
import { useNavigate } from 'react-router-dom';
import { ServerAudience, ServerContext } from './ServerContext';
import { useToast } from '@/hooks/useToast';

const NAMEDEFAULT = 'Servidor de Nombre de Usuario';

export const ServerProvider = ({ children }: { children: ReactNode }) => {
  const [servers, setServers] = useState<Server[]>([]);
  const [server, setServer] = useState<Server>({} as Server);
  const [audience, setAudience] = useState<ServerAudience>();
  const { initiateToast } = useToast();
  const navigate = useNavigate();

  /* Crear Servidor */
  const createServer = async () => {
    try {
      await createNewServer(server);
      navigate('/home');
      getServers();
    } catch (error) {
      initiateToast(String(error), false);
      console.error(error);
    }
  };

  /* Obtener Servidores */
  const getServers = async () => {
    try {
      const data = await getServersByUser();
      setServers(data);
    } catch (error) {
      console.error(error);
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

  return (
    <ServerContext.Provider
      value={{
        servers,
        server,
        audience,
        getServers,
        createServer,
        setAudience,
        updateNameServer,
        updateTypeServer,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

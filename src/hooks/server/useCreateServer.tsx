import { useState } from 'react';

type ServerAudience = 'community' | 'friends' | null;
const NAMEDEFAULT = 'Servidor de Nombre de Usuario';
export const useCreateServer = () => {
  const [audience, setAudience] = useState<ServerAudience>(null);
  const [nameServer, setNameServer] = useState<string>(NAMEDEFAULT);

  /* Crear Servidor */
  const saveServer = () => {
    alert(nameServer);
  };

  const updateNameServer = (value: string) => {
    if (value === '') {
      setNameServer(NAMEDEFAULT);
      return;
    }
    setNameServer(value);
  };

  return {
    /* Propiedades */
    audience,
    nameServer,

    /* Metodos */
    setAudience,
    updateNameServer,
    saveServer,
  };
};

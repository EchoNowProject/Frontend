import { createContext } from 'react';
import { Server, TypeServer } from '@/types';

export type ServerAudience = 'community' | 'friends' | null;

type ServerContextType = {
  servers: Server[];
  server: Server;
  setServer: React.Dispatch<React.SetStateAction<Server>>;
  audience?: ServerAudience;

  getServers: () => Promise<void>;
  createServer: () => Promise<void>;
  setAudience: (value: ServerAudience) => void;
  updateNameServer: (value: string) => void;
  updateTypeServer: (value: TypeServer) => void;
};

const ServerContext = createContext<ServerContextType | undefined>(undefined);

export { ServerContext };

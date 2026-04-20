import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useServer } from '@/hooks/useServer';

export const ServersSidebar = () => {
  const { getServers, servers } = useServer();
  const navigate = useNavigate();

  useEffect(() => {
    const peticion = async () => {
      await getServers();
    };

    peticion();
  }, []);

  return (
    <>
      <div className="flex flex-col max-w-65 my-1 mb-10 gap-3">
        {servers &&
          servers.map((server) => (
            <button
              key={server.id}
              onClick={() => navigate('server/new')}
              className="flex justify-center items-center rounded-lg lg:bg-neutral-900/80 bg-neutral-800 p-2"
            >
              {server.name}
            </button>
          ))}
      </div>
    </>
  );
};

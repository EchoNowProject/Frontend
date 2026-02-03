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
      <div className="flex flex-col max-w-65 my-2">
        {servers &&
          servers.map((server) => (
            <button
              key={server.id}
              onClick={() => navigate('server/new')}
              className="flex justify-center items-center rounded-lg bg-neutral-900/80 p-2"
            >
              {/*  <Plus color="#fff" />
              <span className={`ms-2 text-[12px] ${stateSidebar ? 'flex' : 'hidden'}`}>
                New Server
              </span> */}
              {server.name}
            </button>
          ))}
      </div>
    </>
  );
};

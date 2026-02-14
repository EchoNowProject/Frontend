import { RelationShipDefault } from '@/types';
import React, { ReactNode, useState } from 'react';
import { getAllStatusUser, getStatusUser, setNewStatus } from '@/api/StatusUserApi';
import { StatusUserContext } from '@/context/StatusUser/StatusUserContext';

export const StatusUserProvider = ({ children }: { children: ReactNode }) => {
  const [statusUserAll, setStatusUserAll] = useState<RelationShipDefault[]>(
    [] as RelationShipDefault[]
  );

  const [statusUser, setStatusUser] = useState<RelationShipDefault>({} as RelationShipDefault);

  const getAllUserStatus = async () => {
    try {
      let data = await getAllStatusUser();

      setStatusUserAll(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserStatus = async () => {
    try {
      let status = await getStatusUser();

      setStatusUser(status);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatusUser = async (idStatus: number) => {
    try {
      let data = await setNewStatus(idStatus);
      setStatusUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const features = {
    statusUserAll,
    statusUser,
    setStatusUser,
    setStatusUserAll,
    getUserStatus,
    getAllUserStatus,
    changeStatusUser,
  };

  return <StatusUserContext.Provider value={features}>{children}</StatusUserContext.Provider>;
};

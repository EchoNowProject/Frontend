import { RelationShipDefault } from '@/types';
import { useState } from 'react';
import { getAllStatusUser, getStatusUser, setNewStatus } from '@/api/StatusUserApi';

export const useStatusUser = () => {
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
      console.log(error)
    }
  }

  return { statusUserAll, statusUser, setStatusUser, getUserStatus, getAllUserStatus, changeStatusUser };
};

import { RelationShipDefault } from '@/types';
import React, { createContext } from 'react';

interface StatusUserType {
  statusUserAll: RelationShipDefault[];
  statusUser: RelationShipDefault;
  setStatusUserAll: (r: RelationShipDefault[]) => void;
  setStatusUser: (r: RelationShipDefault) => void;
  getAllUserStatus: () => void;
  getUserStatus: () => void;
  changeStatusUser: (idStatus: number) => void;
}

const StatusUserContext = createContext<StatusUserType | undefined>(undefined);

export { StatusUserContext };

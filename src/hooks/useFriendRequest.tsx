import React, { useRef, useState } from 'react';
import { searchManyUsers } from '@/api/FriendRequestsApi';
import { User } from '@/types';
import { sendFriendRequest } from '@/api/FriendRequestsApi';
import { useToast } from './useToast';

export const useFriendRequest = () => {
  const requestIdRef = useRef(0);

  const [search, setSearch] = useState(''); // * Para el input de la busqueda
  const [users, setUsers] = useState<User[] | undefined>(undefined); // * Para la recogida de usuarios si los queremos buscar

  const { initiateToast } = useToast();

  /* ---------------------------- Functions ---------------------------- */

  /**
   * Funcion que realiza una peticion a la API para buscar los usuarios existentes
   */
  const searchUsers = async () => {
    if (search.trim() != '') {
      try {
        let usersFound = await searchManyUsers(search);
        setUsers(usersFound);
      } catch (error) {
        console.log(error);
      }
    }
  };

  /**
   * Funcion que mantiene la logica para buscar usuarios en la base de datos
   * @param e
   * @returns
   */
  const handleInputSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    // Incrementar el ID de request
    const currentRequestId = ++requestIdRef.current;

    if (value.trim() === '') {
      setUsers(undefined);
      return;
    }

    try {
      const usersFound = await searchManyUsers(value);

      // Solo actualiza si es la última request
      if (currentRequestId === requestIdRef.current) {
        setUsers(usersFound);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendFriendRequestButton = async (userId: number) => {
    try {
      let msg = await sendFriendRequest(userId);
      setUsers((prevUsers) => prevUsers?.filter((user) => user.id !== userId));
      initiateToast(msg, true);
    } catch (error) {
      console.log(error);
    }
  };

  return { users, searchUsers, handleInputSearch, sendFriendRequestButton };
};

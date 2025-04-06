"use client";

import { useStore } from 'zustand';
import { type UserStore } from '@/types';
import { createUserStore } from '@/stores/UserStore';
import React, { useRef, useContext, createContext } from 'react';

interface UserProviderProps {
  children: React.ReactNode,
};

type UserStoreApi = ReturnType<typeof createUserStore>;
const UserStoreContext = createContext<UserStoreApi | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {

  const storeRef = useRef<UserStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUserStore();
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = <T,>(selector: (store: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext);

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`);
  }

  return useStore(userStoreContext, selector);
};
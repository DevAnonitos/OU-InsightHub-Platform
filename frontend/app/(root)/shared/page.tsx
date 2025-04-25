"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';

const SharedPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <>
      
    </>
  );
};

export default SharedPage;
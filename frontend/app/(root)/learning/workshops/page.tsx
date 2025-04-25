"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';

const WorkshopPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <div>WorkshopPage</div>
  );
};

export default WorkshopPage;
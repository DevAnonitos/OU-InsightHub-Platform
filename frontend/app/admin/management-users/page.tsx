"use client";

import React from 'react';
import { useUserStore } from '@/components/Providers/UserProvider';

const ManagementPage = () => {

  const { isAuthenticated } = useUserStore((state) => state);

  return (
    <div>Managementpage</div>
  );
};

export default ManagementPage;
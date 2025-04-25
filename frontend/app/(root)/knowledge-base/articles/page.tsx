"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';

const ArticlesPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <div>ArticlesPage</div>
  );
};

export default ArticlesPage;
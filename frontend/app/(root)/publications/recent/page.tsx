"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';

const RecentPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <>
      <AuthAlertDialog
        condition={!isAuthenticated}
        title="Authentication Required"
        description="You must be signed in to view this page."
        cancelText="Close"
        actionText="Sign in"
        redirectTo="/sign-in"
      />
      {isAuthenticated && 
        <div>📬 Message Page content here</div>
      }
    </>
  );
};

export default RecentPage;
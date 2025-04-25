"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';


const TutorialPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <div>TutorialPage</div>
  );
};

export default TutorialPage;
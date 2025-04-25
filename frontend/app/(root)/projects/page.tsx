"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';

const ProjectPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <div>ProjectPage</div>
  );
};

export default ProjectPage;
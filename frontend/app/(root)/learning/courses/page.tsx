"use client";

import React from 'react';
import AuthAlertDialog from '@/components/Modal/AuthAlertDialog';
import { useUserStore } from '@/components/Providers/UserProvider';

const CoursesPage = () => {

  const { user, isAuthenticated } = useUserStore((state) => state);

  return (
    <div>CoursesPage</div>
  )
}

export default CoursesPage
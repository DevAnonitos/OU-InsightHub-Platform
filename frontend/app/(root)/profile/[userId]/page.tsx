"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/components/Providers/UserProvider';

interface Props {
  params: {
    id: string;
  }
};

const ProfileUserPage = ({ params }: Props) => {

  const router = useRouter();

  return (
    <div>ProfilePage</div>
  )
}

export default ProfileUserPage;
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/components/Providers/UserProvider';

interface Props {
  params: {
    id: string;
  }
}

const ProfileUserPage = ({ params }: Props) => {

  const router = useRouter();

  const { user } = useUserStore((state) => state);

  if(!user || !user.userId || params.id) {
    // router.push("/sign-in");
  }

  return (
    <div>ProfilePage</div>
  )
}

export default ProfileUserPage;
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/components/Providers/UserProvider';

import ProfileTab from '@/components/Users/Profile/ProfileTab';
import ProfileHeader from '@/components/Users/Profile/ProfileHeader';
import { Separator } from '@/components/ui/separator';

interface Props {
  params: {
    id: string;
  }
};

const ProfileUserPage = ({ params }: Props) => {

  const { user } = useUserStore((state) => state);

  const router = useRouter();

  if(!user) {
    router.push("/sign-in");
  }

  return (
    <section className='w-full h-full'>
      <div className='container px-4 md:px-6 w-full mx-auto'>
        {user?.username && (
          <ProfileHeader
              userId={user.id}
              lastName={user.lastName}
              firstName={user.firstName}
              userName={user.username}
              avatarUrl={user?.avatarUrl}
          />
        )}
        <Separator />
        <ProfileTab />
      </div>
    </section>
  )
}

export default ProfileUserPage;
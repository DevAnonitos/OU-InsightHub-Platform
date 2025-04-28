"use client";

import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import { useRouter } from 'next/navigation';
import { SquarePen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProfileHeaderProps {
  userId: string;
  userName: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  roles?: [];
}

const ProfileHeader = ({ 
  roles, 
  userId,
  userName, 
  avatarUrl,
  lastName,
  firstName,
}: ProfileHeaderProps) => {

  const router = useRouter();

  return (
    <div 
      className='flex flex-col sm:flex-row items-center sm:items-start gap-6 
      mb-8'
    >
      <ProfileAvatar 
        avatarUrl={avatarUrl}
        name={userName}
      />

      <div className="flex flex-col items-center sm:items-start flex-grow">
        <div className="flex flex-col justify-center gap-2 mb-1">
          <h1 className='text-3xl font-bold'>{lastName}{firstName}</h1>
          <div className='flex items-center space-x-2'>
            <h4 className="text-lg font-medium">@{userName}</h4>
            <Badge>USER</Badge>
          </div>
        </div>
      </div>

      <Button 
        className="border border-gray-500" 
        variant="outline" 
        onClick={() => router.push(`/profile/${userId}/edit`)}
      >
        <SquarePen />
        Edit Profile
      </Button>
    </div>
  )
}

export default ProfileHeader
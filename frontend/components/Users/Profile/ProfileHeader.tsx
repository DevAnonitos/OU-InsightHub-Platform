"use client";

import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import { SquarePen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProfileHeaderProps {
  userName: string;
  avatarUrl?: string;
  roles?: [];
}

const ProfileHeader = ({ 
  userName, 
  avatarUrl,
  roles, 
}: ProfileHeaderProps) => {
  return (
    <div 
      className='flex flex-col sm:flex-row items-center sm:items-start gap-6 
      mb-8 bg-white rounded-2xl'
    >
      <ProfileAvatar 
        avatarUrl={avatarUrl}
        name={userName}
      />

      <div className="flex flex-col items-center sm:items-start flex-grow">
        <div className="flex flex-col justify-center gap-2 mb-1">
          <h1 className='text-3xl font-bold'>Nguyễn Đức Gia Bảo</h1>
          <div className='flex items-center space-x-2'>
            <h4 className="text-lg font-medium">@{userName}</h4>
            <Badge>USER</Badge>
          </div>
        </div>
      </div>

      <Button className="border border-gray-500" variant="outline">
          <SquarePen />
          Edit Profile
      </Button>
    </div>
  )
}

export default ProfileHeader
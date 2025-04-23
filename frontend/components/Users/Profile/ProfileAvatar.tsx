"use client";

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileAvtProps {
  avatarUrl?: string
  name?: string
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-16 w-16",
  lg: "h-24 w-24",
};


const ProfileAvatar = ({ avatarUrl, name, size='lg' }: ProfileAvtProps) => {

  const firstLetter = name?.charAt(0).toUpperCase();

  return (
    <Avatar className={sizeClasses[size]}>
      {avatarUrl && 
        <AvatarImage 
          src={avatarUrl || "/placeholder.svg"} 
          alt={`${name}'s profile picture`} 
        />
      }
      <AvatarFallback className="text-lg font-medium bg-blue-100 text-blue-700">
        {firstLetter}
      </AvatarFallback>
    </Avatar>
  )
}

export default ProfileAvatar
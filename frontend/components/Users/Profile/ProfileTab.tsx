"use client";

import React, { useState } from 'react';
import ProfilePanel from './ProfilePanel';
import { Tabs, TabsTrigger, TabsList } from '@/components/ui/tabs';

const ProfileTab = () => {

  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Tabs defaultValue='overview' value={activeTab} onValueChange={setActiveTab} className='w-full mt-6'>
      <TabsList>
        <TabsTrigger value='overview'>
          Overview Profile
        </TabsTrigger>
        <TabsTrigger value='activities'>
          Activities
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ProfileTab
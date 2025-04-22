"use client";

import React from 'react';
import { Settings } from 'lucide-react';
import { DialogTrigger } from '../ui/dialog';

const SettingTrigger = () => {
  return (
    <DialogTrigger asChild>
      <Settings className="h-5 w-5 cursor-pointer" />
    </DialogTrigger>
  );
};

export default SettingTrigger;
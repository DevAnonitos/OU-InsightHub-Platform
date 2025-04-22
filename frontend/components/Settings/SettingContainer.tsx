"use client";

import React from 'react';
import { DialogContent } from '../ui/dialog';
import SettingSidebar from './SettingSidebar';
import SettingContent from './SettingContent';

const SettingContainer = () => {
  return (
    <DialogContent className='max-w-6xl p-0 gap-0 h-[90vh] max-h-[900px] border'>
      <SettingSidebar />
      <SettingContent />
    </DialogContent>
  );
};

export default SettingContainer
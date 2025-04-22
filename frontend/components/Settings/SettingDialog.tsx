"use client";

import React from 'react';
import { Dialog } from '../ui/dialog';
import SettingTrigger from './SettingTrigger';
import SettingContainer from './SettingContainer';

const SettingDialog = () => {
  return (
    <Dialog>
      <SettingTrigger />
      <SettingContainer />
    </Dialog>
  )
}

export default SettingDialog
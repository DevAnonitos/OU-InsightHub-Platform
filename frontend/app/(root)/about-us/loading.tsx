"use client";

import React from 'react';
import LoaderSpinner from '@/components/Loading/LoaderSpinner';

const loading = () => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <LoaderSpinner />
    </div>
  );
};

export default loading;
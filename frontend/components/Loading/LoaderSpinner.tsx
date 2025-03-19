"use client";

import React from 'react';
import { Loader } from 'lucide-react';

const LoaderSpinner = () => {
  return (
    <div className='flex justify-center items-center h-screen animate-spin'>
      <Loader />
    </div>
  );
};

export default LoaderSpinner;
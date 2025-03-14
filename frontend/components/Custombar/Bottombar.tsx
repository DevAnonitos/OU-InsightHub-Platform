"use client";
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Bottombar = () => {
  return (
    <div className='flex w-full border-t-[1px] bottom-0 border-gray-200 h-16 bg-white z-10'>
      Bottombar
    </div>
  );
};

export default Bottombar;
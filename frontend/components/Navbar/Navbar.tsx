import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';

const Navbar = () => {
  return (
    <div className='flex w-full bg-white border-b-[1px] h-16'>
      <SidebarTrigger />
    </div>
  )
};

export default Navbar;
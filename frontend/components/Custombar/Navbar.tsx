import React from 'react';
import { SidebarTrigger } from '../ui/sidebar'; 

const Navbar = () => {
  return (
    <div className='flex w-full border-b-[1px] h-16 fixed top-0 bg-white z-10'>
      <SidebarTrigger />
      Navbar
    </div>
  );
};

export default Navbar;
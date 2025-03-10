import React from 'react';
import { SidebarTrigger } from '../ui/sidebar'; 
import { Button } from '../ui/button';
import Searchbar from '../Shared/Searchbar';

const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between border-b-[1px] h-16 fixed top-0 bg-white z-10'>
      <SidebarTrigger />
      <div className='flex items-center justify-between w-full'>
        <Searchbar />
        <div className='flex-1 items-center justify-between space-x-4'>
          <Button variant="outline">Create a account</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
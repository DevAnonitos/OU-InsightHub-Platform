import React from 'react';
import { SidebarTrigger } from '../ui/sidebar'; 
import { Button } from '../ui/button';
import Searchbar from '../Shared/Searchbar';
import { SidebarInset } from '../ui/sidebar';

const Navbar = () => {
  return (
    <SidebarInset>
      <div className='flex w-full flex-shrink-0 items-center justify-between border-b-[1px] h-16 fixed top-0 bg-white z-10'>
        <SidebarTrigger />
        <div className='flex items-center justify-between w-full'>
          <Searchbar />
          <div className='flex items-center space-x-4'>
            <Button variant="outline">Create a account</Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
};

export default Navbar;
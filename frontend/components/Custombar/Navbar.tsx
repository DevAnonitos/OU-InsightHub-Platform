import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import Searchbar from "../Shared/Searchbar";
import { SidebarInset } from "../ui/sidebar";
import Link from "next/link"

const Navbar = () => {
  return (
    <SidebarInset>
      <div className="sticky w-full shrink-0 top-0 left-0 right-0 p-6 flex items-center justify-between z-50 h-16 border-b border-gray-300 font-semibold bg-white">
        <SidebarTrigger />
        <div className="flex items-center justify-between w-full">
          <Searchbar />
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Link href="/sign-up">
                Create a account
              </Link>
            </Button>
            <Button>
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
};

export default Navbar;
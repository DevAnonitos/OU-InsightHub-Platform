"use client";

import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import Breadcrumb from "../Shared/Breadcrumb";

const Navbar = () => {
  return (
      <header
        className="
          sticky top-0 left-0 right-0 z-50
          flex h-16 w-full
          items-center justify-between
          border-b border-gray-300 bg-white p-6 font-semibold
          bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
        "
      >
        {/* Bên trái: SidebarTrigger và Breadcrumb */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          {/* <Breadcrumb /> */}
        </div>

        {/* Bên phải: Cụm nút đăng ký / đăng nhập */}
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <Link href="/sign-up">Create an account</Link>
          </Button>
          <Button>
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </header>
  );
};

export default Navbar;

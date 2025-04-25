"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";

import ThemeToggle from "../Shared/ThemeToggle";
import SettingDialog from "../Settings/SettingDialog";
import { NotificationDropdown } from "../Notifications/NotificationDropdown";

import { useCurrentUser } from "@/lib/queries/queries";
import { useUserStore } from "../Providers/UserProvider";

const Navbar = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useCurrentUser();
  const { user, isAuthenticated, setUser } = useUserStore((state) => state);

  useEffect(() => {
    if (data && !user) {
      console.log('Setting user:', data?.data);
      setUser(data?.data);
    }
  }, [data, setUser, user]);

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isError) {
      router.push("/sign-in");
    }
  }, [isLoading, isError, isAuthenticated]);

  return (
    <header
      className="
        sticky top-0 left-0 right-0 z-50
        flex h-16 w-full
        items-center justify-between
        border-b border-gray-300 dark:border-slate-700  bg-white p-6 font-semibold
        bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
      "
    >
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
      </div>
      
      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <>
            <Button variant="outline">
              <Link href="/sign-up">Create an account</Link>
            </Button>
            <Button>
              <Link href="/sign-in">Login</Link>
            </Button>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <NotificationDropdown />
            <SettingDialog />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

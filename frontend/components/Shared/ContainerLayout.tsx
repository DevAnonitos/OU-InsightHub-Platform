"use client";

import React from 'react';
import Navbar from "@/components/Custombar/Navbar";
import Bottombar from "@/components/Custombar/Bottombar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Custombar/AppSidebar";

interface ContainerLayoutProps {
  children: React.ReactNode;
};

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <div className="relative flex h-full w-full flex-1 transition-colors z-0">
        <SidebarProvider>
          <AppSidebar />
          <div className="relative flex h-full max-w-full flex-1 flex-col">
            <div className="relative flex-1 flex flex-col transition-[width,height] ease-linear">
              <Navbar />
              <main className="flex w-full h-full p-6 bg-background">
                {children}
              </main>
              <Bottombar />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default ContainerLayout;

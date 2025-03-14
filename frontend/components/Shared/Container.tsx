"use client"

import type React from "react"

import { AppSidebar } from "../Custombar/AppSidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import Navbar from "../Custombar/Navbar"
import Bottombar from "../Custombar/Bottombar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex w-full flex-col">
        <Navbar />
        {/* Add pt-16 to account for the fixed navbar height */}
        <main className="flex-1 overflow-auto p-4 pt-16 mt-4">{children}</main>
        <Bottombar />
      </SidebarInset>
    </div>
  )
}


"use client"

import Link from "next/link"
import { Plus, Search } from "lucide-react"

import { menuSections } from "@/constants/menu-items"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { SidebarSection } from "./AppSidebarMenuItems"
import ProfileUser from "../Shared/ProfileUser"

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="flex flex-col items-center justify-center py-4 px-2">
        <Link
          href="/"
          className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-primary/5 transition-colors"
          aria-label="OU Insight Hub - Return to home page"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <span className="text-lg font-bold">OU</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none">OU Insight Hub</span>
            <span className="text-xs text-muted-foreground">Knowledge Portal</span>
          </div>
        </Link>

        <div className="w-full mt-4">
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <Link href="/search" aria-label="Search all resources">
              <Search className="h-4 w-4" />
              <span>Search Resources...</span>
            </Link>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {menuSections.map((section) => (
          <SidebarSection key={section.id} sectionId={section.id} label={section.label} items={section.items} />
        ))}

        <SidebarGroup>
          <Button variant="outline" className="w-full justify-start mt-4 gap-2 text-primary" asChild>
            <Link href="/research/projects/new" aria-label="Create a new research project">
              <Plus className="h-4 w-4" />
              <span>New Research Project</span>
            </Link>
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <ProfileUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};


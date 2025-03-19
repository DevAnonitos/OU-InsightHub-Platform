"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import type { MenuItem } from "@/types/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface SidebarSectionProps {
  sectionId: string;
  label: string;
  items: MenuItem[];
};

export function SidebarSection({ sectionId, label, items }: SidebarSectionProps) {
  const pathname = usePathname()

  const isActive = (url: string) => {
    if (pathname === url) return true;
    if (url !== "/" && pathname.startsWith(url)) return true;
    return false;
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-bold text-md" id={`${sectionId}-heading`}>
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              {item.items ? (
                <Collapsible className="w-full">
                  <div className="flex w-full transition-all ease-out">
                    <SidebarMenuButton 
                      asChild isActive={isActive(item.url)} 
                      className="flex-1 pr-0 rounded-r-none transition-all ease-out"
                    >
                      <Link
                        prefetch={true}
                        href={item.url}
                        scroll = {false}
                        aria-label={item.description || item.title}
                        title={item.description || item.title}
                      >
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <CollapsibleTrigger asChild>
                      <button
                        className={`px-2 flex items-center justify-center rounded-r-md transition-all ease-out ${
                          isActive(item.url)
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-accent/50 hover:text-accent-foreground"
                        }`}
                        aria-label={`Toggle ${item.title} submenu`}
                      >
                        <ChevronDown className="h-4 w-4 shrink-0 opacity-70 transition-transform ease-out" />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="transition-all ease-out">
                    <SidebarMenuSub className="transition-all ease-out">
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.url}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive(subItem.url)}
                            className={isActive(subItem.url) ? "bg-accent font-medium transition-all ease-out" : ""}
                          >
                            <Link
                              prefetch={true}
                              scroll = {false}
                              href={subItem.url}
                              aria-label={subItem.description || subItem.title}
                              title={subItem.description || subItem.title}
                            >
                              {subItem.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.url)}
                  className={isActive(item.url) ? "bg-accent font-medium" : ""}
                >
                  <Link
                    prefetch={true}
                    scroll = {false}
                    href={item.url}
                    aria-label={item.description || item.title}
                    title={item.description || item.title}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};


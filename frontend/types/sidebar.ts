import type { LucideIcon } from "lucide-react";

export interface SubMenuItem {
  title: string;
  url: string;
  description?: string;
};

export interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  description?: string;
  items?: SubMenuItem[];
};

export interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
};


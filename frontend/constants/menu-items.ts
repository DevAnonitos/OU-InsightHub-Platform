import {
  BookOpen,
  Calendar,
  Database,
  FileText,
  Folders,
  GraduationCap,
  Home,
  MessageSquare,
  PieChart,
  Share2,
  Users,
  Zap,
} from "lucide-react";
  
import type { MenuSection } from "@/types/sidebar";
  
// About OU section
export const aboutOUItems: MenuSection = {
    id: "about",
    label: "OU Flatform",
    items: [
      {
        title: "Overview",
        url: "/about-ou",
        icon: Home,
        description: "About the HCMOU",
      },
      {
        title: "Faculty & Staff",
        url: "/faculties",
        icon: Users,
        description: "Faculty and staff directory",
        items: [
          {
            title: "Faculty Directory",
            url: "/faculties/directory",
            description: "Browse faculty by department",
          },
          {
            title: "Research Faculty",
            url: "/faculties/research",
            description: "Faculty engaged in research",
          },
          {
            title: "Administration",
            url: "/faculties/administration",
            description: "University administration",
          },
        ],
      },
      {
        title: "Colleges & Schools",
        url: "/colleges",
        icon: GraduationCap,
        description: "Academic colleges and schools",
        items: [
          {
            title: "Arts & Sciences",
            url: "/colleges/arts-sciences",
            description: "College of Arts and Sciences",
          },
          {
            title: "Engineering",
            url: "/colleges/engineering",
            description: "Gallogly College of Engineering",
          },
          {
            title: "Business",
            url: "/colleges/business",
            description: "Price College of Business",
          },
          {
            title: "All Colleges",
            url: "/colleges/all",
            description: "View all colleges and schools",
          },
        ],
      },
      {
        title: "Campus Life",
        url: "/campus-life",
        icon: Zap,
        description: "Student life and campus activities",
        items: [
          {
            title: "Student Clubs",
            url: "/campus-life/clubs",
            description: "Student organizations and clubs",
          },
          {
            title: "Events & Activities",
            url: "/campus-life/events",
            description: "Campus events calendar",
          },
          {
            title: "Athletics",
            url: "/campus-life/athletics",
            description: "OU sports and athletics",
          },
          {
            title: "Housing",
            url: "/campus-life/housing",
            description: "On-campus housing options",
          },
        ],
      },
      {
        title: "Campus Facilities",
        url: "/facilities",
        icon: BookOpen,
        description: "Campus buildings and facilities",
        items: [
          {
            title: "Libraries",
            url: "/facilities/libraries",
            description: "University libraries",
          },
          {
            title: "Research Centers",
            url: "/facilities/research-centers",
            description: "Specialized research facilities",
          },
          {
            title: "Campus Map",
            url: "/facilities/map",
            description: "Interactive campus map",
          },
        ],
      },
      {
        title: "History & Traditions",
        url: "/history",
        icon: FileText,
        description: "University history and traditions",
        items: [
          {
            title: "University History",
            url: "/history/timeline",
            description: "Historical timeline",
          },
          {
            title: "Traditions",
            url: "/history/traditions",
            description: "OU traditions and heritage",
          },
          {
            title: "Notable Alumni",
            url: "/history/alumni",
            description: "Distinguished OU alumni",
          },
        ],
      },
    ],
}
  
// Research section
export const researchItems: MenuSection = {
    id: "research",
    label: "Research & Insights",
    items: [
      {
        title: "Research Projects",
        url: "/projects",
        icon: Folders,
        description: "Browse and manage research projects",
        items: [
          {
            title: "Active Projects",
            url: "/projects/active",
            description: "Currently active research projects",
          },
          {
            title: "Archived Projects",
            url: "/projects/archived",
            description: "Completed and archived research",
          },
          {
            title: "Create New Project",
            url: "/projects/new",
            description: "Start a new research project",
          },
        ],
      },
      {
        title: "Data Repository",
        url: "/data",
        icon: Database,
        description: "Access research data collections",
        items: [
          {
            title: "Public Datasets",
            url: "/data/public",
            description: "Publicly available datasets",
          },
          {
            title: "My Datasets",
            url: "/data/my-datasets",
            description: "Your uploaded datasets",
          },
          {
            title: "Upload Data",
            url: "/data/upload",
            description: "Upload new research data",
          },
        ],
      },
      {
        title: "Visualizations",
        url: "/visualizations",
        icon: PieChart,
        description: "Data visualization tools",
        items: [
          {
            title: "Charts & Graphs",
            url: "/visualizations/charts",
            description: "Create and view data charts",
          },
          {
            title: "Interactive Dashboards",
            url: "/visualizations/dashboards",
            description: "Interactive data dashboards",
          },
        ],
      },
    ],
};
  
// Resources section
export const resourceItems: MenuSection = {
    id: "resources",
    label: "Resources",
    items: [
      {
        title: "Knowledge Base",
        url: "/knowledge-base",
        icon: BookOpen,
        description: "Access knowledge articles and guides",
        items: [
          {
            title: "Articles",
            url: "/knowledge-base/articles",
            description: "Educational articles and guides",
          },
          {
            title: "Tutorials",
            url: "/knowledge-base/tutorials",
            description: "Step-by-step tutorials",
          },
        ],
      },
      {
        title: "Publications",
        url: "/publications",
        icon: FileText,
        description: "Research publications and papers",
        items: [
          {
            title: "Recent Publications",
            url: "/publications/recent",
            description: "Recently published research",
          },
          {
            title: "My Publications",
            url: "/publications/my-publications",
            description: "Your published research",
          },
        ],
      },
      {
        title: "Learning Resources",
        url: "/learning",
        icon: GraduationCap,
        description: "Educational materials and courses",
        items: [
          {
            title: "Courses",
            url: "/learning/courses",
            description: "Online courses and training",
          },
          {
            title: "Workshops",
            url: "/learning/workshops",
            description: "Upcoming workshops and events",
          },
        ],
      },
    ],
};
  
// Collaboration section
export const collaborationItems: MenuSection = {
    id: "collaboration",
    label: "Collaboration",
    items: [
      {
        title: "Teams",
        url: "/teams",
        icon: Users,
        description: "Manage research teams and groups",
        items: [
          {
            title: "My Teams",
            url: "/teams/my-teams",
            description: "Teams you belong to",
          },
          {
            title: "Create Team",
            url: "/teams/create",
            description: "Start a new research team",
          },
        ],
      },
      {
        title: "Messages",
        url: "/messages",
        icon: MessageSquare,
        description: "Communication with collaborators",
        items: [
          {
            title: "Inbox",
            url: "/messages/inbox",
            description: "Your message inbox",
          },
          {
            title: "Discussions",
            url: "/messages/discussions",
            description: "Topic-based discussions",
          },
        ],
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
        description: "Schedule and events",
        items: [
          {
            title: "My Calendar",
            url: "/calendar/my-calendar",
            description: "Your personal calendar",
          },
          {
            title: "Team Events",
            url: "/calendar/team-events",
            description: "Team meetings and events",
          },
        ],
      },
      {
        title: "Shared Resources",
        url: "/shared",
        icon: Share2,
        description: "Shared files and resources",
        items: [
          {
            title: "Shared with Me",
            url: "/shared/with-me",
            description: "Resources shared with you",
          },
          {
            title: "My Shared Items",
            url: "/shared/my-items",
            description: "Items you've shared with others",
          },
        ],
      },
    ],
};
  
// All menu sections
export const menuSections: MenuSection[] = [
  aboutOUItems, 
  researchItems, 
  resourceItems, 
  collaborationItems,
];
  
  // Default open sections
export const defaultOpenSections: Record<string, boolean> = {
  about: true,
  research: true,
  resources: false,
  collaboration: false,
};
  
  
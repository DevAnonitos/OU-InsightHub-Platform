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
  } from "lucide-react"
  
  import type { MenuSection } from "@/types/sidebar"
  
  // About OU section
  export const aboutOUItems: MenuSection = {
    id: "about",
    label: "OU Flatform",
    items: [
      {
        title: "Overview",
        url: "/about",
        icon: Home,
        description: "About the University of Oklahoma",
      },
      {
        title: "Faculty & Staff",
        url: "/about/faculty",
        icon: Users,
        description: "Faculty and staff directory",
        items: [
          {
            title: "Faculty Directory",
            url: "/about/faculty/directory",
            description: "Browse faculty by department",
          },
          {
            title: "Research Faculty",
            url: "/about/faculty/research",
            description: "Faculty engaged in research",
          },
          {
            title: "Administration",
            url: "/about/faculty/administration",
            description: "University administration",
          },
        ],
      },
      {
        title: "Colleges & Schools",
        url: "/about/colleges",
        icon: GraduationCap,
        description: "Academic colleges and schools",
        items: [
          {
            title: "Arts & Sciences",
            url: "/about/colleges/arts-sciences",
            description: "College of Arts and Sciences",
          },
          {
            title: "Engineering",
            url: "/about/colleges/engineering",
            description: "Gallogly College of Engineering",
          },
          {
            title: "Business",
            url: "/about/colleges/business",
            description: "Price College of Business",
          },
          {
            title: "All Colleges",
            url: "/about/colleges/all",
            description: "View all colleges and schools",
          },
        ],
      },
      {
        title: "Campus Life",
        url: "/about/campus-life",
        icon: Zap,
        description: "Student life and campus activities",
        items: [
          {
            title: "Student Clubs",
            url: "/about/campus-life/clubs",
            description: "Student organizations and clubs",
          },
          {
            title: "Events & Activities",
            url: "/about/campus-life/events",
            description: "Campus events calendar",
          },
          {
            title: "Athletics",
            url: "/about/campus-life/athletics",
            description: "OU sports and athletics",
          },
          {
            title: "Housing",
            url: "/about/campus-life/housing",
            description: "On-campus housing options",
          },
        ],
      },
      {
        title: "Campus Facilities",
        url: "/about/facilities",
        icon: BookOpen,
        description: "Campus buildings and facilities",
        items: [
          {
            title: "Libraries",
            url: "/about/facilities/libraries",
            description: "University libraries",
          },
          {
            title: "Research Centers",
            url: "/about/facilities/research-centers",
            description: "Specialized research facilities",
          },
          {
            title: "Campus Map",
            url: "/about/facilities/map",
            description: "Interactive campus map",
          },
        ],
      },
      {
        title: "History & Traditions",
        url: "/about/history",
        icon: FileText,
        description: "University history and traditions",
        items: [
          {
            title: "University History",
            url: "/about/history/timeline",
            description: "Historical timeline",
          },
          {
            title: "Traditions",
            url: "/about/history/traditions",
            description: "OU traditions and heritage",
          },
          {
            title: "Notable Alumni",
            url: "/about/history/alumni",
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
        url: "/research/projects",
        icon: Folders,
        description: "Browse and manage research projects",
        items: [
          {
            title: "Active Projects",
            url: "/research/projects/active",
            description: "Currently active research projects",
          },
          {
            title: "Archived Projects",
            url: "/research/projects/archived",
            description: "Completed and archived research",
          },
          {
            title: "Create New Project",
            url: "/research/projects/new",
            description: "Start a new research project",
          },
        ],
      },
      {
        title: "Data Repository",
        url: "/research/data",
        icon: Database,
        description: "Access research data collections",
        items: [
          {
            title: "Public Datasets",
            url: "/research/data/public",
            description: "Publicly available datasets",
          },
          {
            title: "My Datasets",
            url: "/research/data/my-datasets",
            description: "Your uploaded datasets",
          },
          {
            title: "Upload Data",
            url: "/research/data/upload",
            description: "Upload new research data",
          },
        ],
      },
      {
        title: "Visualizations",
        url: "/research/visualizations",
        icon: PieChart,
        description: "Data visualization tools",
        items: [
          {
            title: "Charts & Graphs",
            url: "/research/visualizations/charts",
            description: "Create and view data charts",
          },
          {
            title: "Interactive Dashboards",
            url: "/research/visualizations/dashboards",
            description: "Interactive data dashboards",
          },
        ],
      },
    ],
  }
  
  // Resources section
  export const resourceItems: MenuSection = {
    id: "resources",
    label: "Resources",
    items: [
      {
        title: "Knowledge Base",
        url: "/resources/knowledge-base",
        icon: BookOpen,
        description: "Access knowledge articles and guides",
        items: [
          {
            title: "Articles",
            url: "/resources/knowledge-base/articles",
            description: "Educational articles and guides",
          },
          {
            title: "Tutorials",
            url: "/resources/knowledge-base/tutorials",
            description: "Step-by-step tutorials",
          },
        ],
      },
      {
        title: "Publications",
        url: "/resources/publications",
        icon: FileText,
        description: "Research publications and papers",
        items: [
          {
            title: "Recent Publications",
            url: "/resources/publications/recent",
            description: "Recently published research",
          },
          {
            title: "My Publications",
            url: "/resources/publications/my-publications",
            description: "Your published research",
          },
        ],
      },
      {
        title: "Learning Resources",
        url: "/resources/learning",
        icon: GraduationCap,
        description: "Educational materials and courses",
        items: [
          {
            title: "Courses",
            url: "/resources/learning/courses",
            description: "Online courses and training",
          },
          {
            title: "Workshops",
            url: "/resources/learning/workshops",
            description: "Upcoming workshops and events",
          },
        ],
      },
    ],
  }
  
  // Collaboration section
  export const collaborationItems: MenuSection = {
    id: "collaboration",
    label: "Collaboration",
    items: [
      {
        title: "Teams",
        url: "/collaboration/teams",
        icon: Users,
        description: "Manage research teams and groups",
        items: [
          {
            title: "My Teams",
            url: "/collaboration/teams/my-teams",
            description: "Teams you belong to",
          },
          {
            title: "Create Team",
            url: "/collaboration/teams/create",
            description: "Start a new research team",
          },
        ],
      },
      {
        title: "Messages",
        url: "/collaboration/messages",
        icon: MessageSquare,
        description: "Communication with collaborators",
        items: [
          {
            title: "Inbox",
            url: "/collaboration/messages/inbox",
            description: "Your message inbox",
          },
          {
            title: "Discussions",
            url: "/collaboration/messages/discussions",
            description: "Topic-based discussions",
          },
        ],
      },
      {
        title: "Calendar",
        url: "/collaboration/calendar",
        icon: Calendar,
        description: "Schedule and events",
        items: [
          {
            title: "My Calendar",
            url: "/collaboration/calendar/my-calendar",
            description: "Your personal calendar",
          },
          {
            title: "Team Events",
            url: "/collaboration/calendar/team-events",
            description: "Team meetings and events",
          },
        ],
      },
      {
        title: "Shared Resources",
        url: "/collaboration/shared",
        icon: Share2,
        description: "Shared files and resources",
        items: [
          {
            title: "Shared with Me",
            url: "/collaboration/shared/with-me",
            description: "Resources shared with you",
          },
          {
            title: "My Shared Items",
            url: "/collaboration/shared/my-items",
            description: "Items you've shared with others",
          },
        ],
      },
    ],
  }
  
  // All menu sections
  export const menuSections: MenuSection[] = [aboutOUItems, researchItems, resourceItems, collaborationItems]
  
  // Default open sections
  export const defaultOpenSections: Record<string, boolean> = {
    about: true,
    research: true,
    resources: false,
    collaboration: false,
  }
  
  
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BookOpen, Database, Users, Building, BarChart, FileText, GraduationCap, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchCategoryProps {
  className?: string
}

export function SearchCategories({ className }: SearchCategoryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [
    {
      name: "Academic Papers",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      query: "category=academic-papers",
    },
    {
      name: "Research Data",
      icon: <Database className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      query: "category=research-data",
    },
    {
      name: "Faculty",
      icon: <Users className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
      query: "category=faculty",
    },
    {
      name: "Facilities",
      icon: <Building className="h-5 w-5" />,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
      query: "category=facilities",
    },
    {
      name: "Statistics",
      icon: <BarChart className="h-5 w-5" />,
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      query: "category=statistics",
    },
    {
      name: "Publications",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
      query: "category=publications",
    },
    {
      name: "Courses",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
      query: "category=courses",
    },
    {
      name: "Events",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      query: "category=events",
    },
  ]

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-3", className)}>
      {categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            href={`/search?${category.query}`}
            className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300 h-full"
          >
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-full mb-3", category.color)}>
              {category.icon}
            </div>
            <span className="text-sm font-medium text-slate-900 dark:text-white text-center">{category.name}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};


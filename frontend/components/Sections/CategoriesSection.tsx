"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Database, Users, Building, BarChartIcon as ChartBar, FileText, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [
    {
      title: "Academic Resources",
      description: "Access course materials, research papers, and educational tools",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-400",
      href: "#",
    },
    {
      title: "Research Projects",
      description: "Explore ongoing research initiatives and collaborative opportunities",
      icon: <Database className="h-8 w-8" />,
      color: "from-purple-500 to-pink-400",
      href: "#",
    },
    {
      title: "Faculty & Staff",
      description: "Connect with professors, researchers, and administrative personnel",
      icon: <Users className="h-8 w-8" />,
      color: "from-amber-500 to-orange-400",
      href: "#",
    },
    {
      title: "Campus Facilities",
      description: "Learn about campus buildings, labs, and available resources",
      icon: <Building className="h-8 w-8" />,
      color: "from-emerald-500 to-green-400",
      href: "#",
    },
    {
      title: "Data Visualizations",
      description: "Interactive charts and graphs for research data analysis",
      icon: <ChartBar className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-400",
      href: "#",
    },
    {
      title: "Publications",
      description: "Browse academic journals, papers, and university publications",
      icon: <FileText className="h-8 w-8" />,
      color: "from-rose-500 to-red-400",
      href: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6 w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-blue-600/20 bg-blue-100/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 dark:bg-blue-400/10 dark:border-blue-400/20">
            <span className="mr-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span> Explore Categories
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Discover Our Knowledge Resources
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Browse through our comprehensive collection of resources organized by category
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Link
                href={category.href}
                className="group block h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/5 hover:border-blue-500/50 dark:hover:border-blue-500/50">
                  <CardHeader className="relative p-6">
                    <div
                      className={`absolute top-0 right-0 p-3 opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : ""}`}
                    >
                      <ArrowUpRight className="h-5 w-5 text-blue-500" />
                    </div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${category.color} text-white shadow-lg mb-4`}
                    >
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


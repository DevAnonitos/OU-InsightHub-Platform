"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Database, FileText, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function SearchHeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "Academic Papers", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "Research Data", icon: <Database className="h-4 w-4 mr-2" /> },
    { name: "Publications", icon: <FileText className="h-4 w-4 mr-2" /> },
    { name: "Faculty", icon: <Users className="h-4 w-4 mr-2" /> },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-8 text-center"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Find the Knowledge You Need
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Search across our comprehensive database of academic resources
            </p>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for papers, research, faculty..."
                className="w-full rounded-full border-gray-200 bg-white pl-10 pr-20 py-6 text-base shadow-lg focus-visible:ring-blue-500 dark:border-gray-800 dark:bg-slate-950 dark:focus-visible:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
                Search
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800"
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            <p>Popular searches: research methodology, quantum computing, climate data</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


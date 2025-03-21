"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight, Loader2, FileText, Users, BookOpen, Database } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useDebounce } from "@/hooks/use-debounce"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type SearchResult = {
  id: string
  title: string
  type: string
  typeIcon: any
  preview: string
  tags?: string[]
}

const resultTypes = {
  paper: { icon: BookOpen, color: "#3b82f6" },
  data: { icon: Database, color: "#8b5cf6" },
  faculty: { icon: Users, color: "#f59e0b" },
  publication: { icon: FileText, color: "#10b981" },
}

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const debouncedQuery = useDebounce(query, 300)

  // Handle clicks outside of search component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Simulate search API call
  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([])
      return
    }

    const fetchResults = async () => {
      setIsLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock results based on query
      const mockResults: SearchResult[] = [
        {
          id: "1",
          title: `Advances in ${debouncedQuery} Research`,
          type: "Academic Paper",
          typeIcon: resultTypes.paper.icon,
          preview: `Recent developments in ${debouncedQuery} show promising results for future applications...`,
          tags: ["Research", "Science"],
        },
        {
          id: "2",
          title: `${debouncedQuery} Dataset Collection`,
          type: "Research Data",
          typeIcon: resultTypes.data.icon,
          preview: `Comprehensive dataset on ${debouncedQuery} methodologies and applications...`,
          tags: ["Dataset", "Analysis"],
        },
        {
          id: "3",
          title: `Dr. Alex Morgan - ${debouncedQuery} Expert`,
          type: "Faculty",
          typeIcon: resultTypes.faculty.icon,
          preview: `Leading researcher in ${debouncedQuery} with over 50 publications...`,
          tags: ["Professor", "Expert"],
        },
        {
          id: "4",
          title: `Journal of ${debouncedQuery} Studies`,
          type: "Publication",
          typeIcon: resultTypes.publication.icon,
          preview: `Peer-reviewed articles focusing on ${debouncedQuery} and related topics...`,
          tags: ["Journal", "Peer-reviewed"],
        },
      ]

      setResults(mockResults)
      setIsLoading(false)
    }

    fetchResults()
  }, [debouncedQuery])

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Loading animation
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  }

  const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <div className="relative max-w-7xl mx-auto mb-8" ref={searchRef}>
      <motion.div
        className={cn(
          "flex items-center bg-white rounded-full border shadow-sm transition-all duration-200",
          isFocused ? "border-blue-300 shadow-md shadow-blue-50" : "",
        )}
        animate={{
          scale: isFocused ? 1 : 1,
          transition: { duration: 0.2 },
        }}
      >
        <div className="absolute left-4 text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        <Input
          type="text"
          placeholder="Search for papers, research, faculty..."
          className="flex-1 border-none pl-12 pr-4 py-6 text-base rounded-l-full focus-visible:ring-0 focus-visible:ring-offset-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        <Button
          className="rounded-full px-6 py-6 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white m-1 flex items-center gap-2"
          disabled={isLoading || query.length < 2}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Search
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isFocused && query.length >= 2 && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 z-50 right-0 mt-2 bg-white rounded-xl border shadow-lg"
          >
            <div className="p-2">
              {isLoading ? (
                <motion.div
                  className="flex items-center justify-center py-10"
                  variants={loadingContainerVariants}
                  initial="start"
                  animate="end"
                >
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((index) => (
                      <motion.span
                        key={index}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                        className={`block h-3 w-3 rounded-full ${
                          index === 0 ? "bg-blue-400" : index === 1 ? "bg-blue-500" : "bg-blue-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600">Searching...</span>
                </motion.div>
              ) : results.length > 0 ? (
                <motion.div
                  className="divide-y divide-gray-100"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {results.map((result) => {
                    const TypeIcon = result.typeIcon

                    return (
                      <motion.div
                        key={result.id}
                        variants={itemVariants}
                        className="p-3 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
                        whileHover={{
                          backgroundColor: "rgba(243, 244, 246, 0.8)",
                          transition: { duration: 0.1 },
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                              <TypeIcon className="h-5 w-5 text-blue-500" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-gray-900 truncate">{result.title}</h3>
                              <Badge variant="outline" className="ml-2 text-xs bg-gray-50">
                                {result.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{result.preview}</p>
                            {result.tags && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {result.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              ) : (
                <motion.div
                  className="py-10 text-center text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.1 } }}
                >
                  No results found for "{query}"
                </motion.div>
              )}
            </div>

            {results.length > 0 && (
              <motion.div
                className="p-2 bg-gray-50 border-t border-gray-100 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
              >
                <Button variant="ghost" size="sm" className="text-sm text-blue-600">
                  View all {results.length} results
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


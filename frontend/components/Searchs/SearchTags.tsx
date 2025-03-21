"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { Book, Database, Users, FileText } from "lucide-react"

const tags = [
  { id: "all", label: "All Resources", icon: null },
  { id: "papers", label: "Academic Papers", icon: Book },
  { id: "data", label: "Research Data", icon: Database },
  { id: "faculty", label: "Faculty", icon: Users },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "recent", label: "Recently Added", icon: null },
  { id: "popular", label: "Most Popular", icon: null },
  { id: "cited", label: "Highly Cited", icon: null },
]

export function SearchTags() {
  const [activeTag, setActiveTag] = useState("all")

  return (
    <div className="mb-10">
        <div className="flex space-x-2 pb-2 overflow-x-auto">
          {tags.map((tag) => {
            const Icon = tag.icon
            const isActive = activeTag === tag.id

            return (
              <Button
                key={tag.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveTag(tag.id)}
                className="rounded-md px-4 py-2 h-auto"
              >
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                {tag.label}
              </Button>
            )
          })}
        </div>
    </div>
  )
}


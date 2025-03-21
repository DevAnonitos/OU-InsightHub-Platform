"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Star, BookOpen } from "lucide-react"

const exploreTabs = [
  { id: "featured", label: "Featured", icon: Star },
  { id: "recent", label: "Recent", icon: Clock },
]

const exploreItems = [
  {
    id: 1,
    title: "Quantum Computing Research",
    type: "Academic Paper",
    author: "Dr. Sarah Johnson",
    date: "Mar 15, 2023",
    tags: ["Physics", "Computing", "Quantum Theory"],
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    id: 2,
    title: "Climate Change Data Analysis",
    type: "Research Data",
    author: "Environmental Science Dept",
    date: "Feb 28, 2023",
    tags: ["Climate", "Data Science", "Environmental"],
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    id: 3,
    title: "Neural Networks in Medicine",
    type: "Publication",
    author: "Dr. Michael Chen",
    date: "Apr 10, 2023",
    tags: ["AI", "Medicine", "Neural Networks"],
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    id: 4,
    title: "AI Agent",
    type: "Publication",
    author: "Dr. Michael Chen",
    date: "Apr 10, 2023",
    tags: ["AI", "Medicine", "Neural Networks"],
    image: "/placeholder.svg?height=120&width=240",
  },
]

export function ExploreSection() {
  return (
    <div className="mb-12">
      <Tabs defaultValue="featured">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Explore Resources</h2>
          <TabsList className="bg-gray-100 p-1 h-9">
            {exploreTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <TabsTrigger key={tab.id} value={tab.id} className="text-xs px-3 py-1 data-[state=active]:bg-white">
                  <Icon className="h-3.5 w-3.5 mr-1.5" />
                  {tab.label}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>

        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {exploreItems.map((item) => (
              <ExploreCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...exploreItems].reverse().map((item) => (
              <ExploreCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-center">
        <Button variant="outline" size="sm" className="gap-1">
          View All Resources <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}

function ExploreCard({ item } : { item: any }) {
  return (
    <Card className="overflow-hidden h-full border-gray-200 hover:border-blue-200 transition-colors">
      <div className="relative h-32 bg-gray-100 flex items-center justify-center">
        <BookOpen className="h-10 w-10 text-gray-300" />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-xs bg-white">
            {item.type}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 text-start">
        <h3 className="font-medium text-gray-900 line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.author}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.slice(0, 2).map((tag: any) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {item.tags.length > 2 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{item.tags.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xs text-gray-500">{item.date}</span>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}


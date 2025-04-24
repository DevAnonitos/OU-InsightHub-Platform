"use client"

import { useState } from "react"
import { format } from "date-fns";
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { Event } from "@/types/calendar"

interface DayCellProps {
  date: Date
  events: Event[]
  isCurrentMonth: boolean
  isToday: boolean
  onAddEvent: () => void
  onEditEvent: (event: Event) => void
}

export function DayCell({ date, events, isCurrentMonth, isToday, onAddEvent, onEditEvent }: DayCellProps) {
  // Get unique categories for dot indicators
  // const categories = [...new Set(events.map((event) => event.category))]
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <div
      className={cn(
        "min-h-[100px] p-2 border relative group",
        !isCurrentMonth && "bg-muted/20 text-muted-foreground",
        isToday && "bg-sky-50 dark:bg-sky-950/30 ring-1 ring-inset ring-sky-200 dark:ring-sky-800",
      )}
      aria-label={format(date, "EEEE, MMMM do, yyyy")}
      tabIndex={0}
    >
      <div className="flex justify-between items-start">
        <span
          className={cn(
            "text-sm font-medium",
            isToday && "h-6 w-6 rounded-full bg-black text-white flex items-center justify-center",
          )}
        >
          {format(date, "d")}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
          onClick={(e) => {
            e.stopPropagation()
            onAddEvent()
          }}
        >
          <Plus className="h-3 w-3" />
          <span className="sr-only">Add event</span>
        </Button>
      </div>

      {/* Event indicators */}
      {/* {events.length > 0 && (
        <div className="flex gap-1 mt-1">
          {categories.map((category) => (
            <HoverCard key={category}>
              <HoverCardTrigger asChild>
                <div
                  className={cn(
                    "h-2 w-2 rounded-full",
                    category === "work" && "bg-sky-500 dark:bg-sky-400",
                    category === "personal" && "bg-emerald-500 dark:bg-emerald-400",
                    category === "family" && "bg-violet-500 dark:bg-violet-400",
                    category === "holiday" && "bg-amber-500 dark:bg-amber-400",
                    category === "other" && "bg-slate-500 dark:bg-slate-400",
                  )}
                />
              </HoverCardTrigger>
              <HoverCardContent className="w-80" side="right">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold capitalize">{category} Events</h4>
                  <p className="text-sm">
                    {events.filter((e) => e.category === category).length} events in this category
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      )} */}

      {/* Events popover */}
      {events.length > 0 && (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute inset-0 h-full w-full p-0 m-0 rounded-none"
              onClick={() => setIsPopoverOpen(true)}
            >
              <span className="sr-only">Show events for {format(date, "MMMM do")}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-2">
              <h3 className="font-medium">{format(date, "EEEE, MMMM do")}</h3>
              <ul className="space-y-2 max-h-[300px] overflow-auto">
                {events.map((event) => (
                  <li
                    key={event.id}
                    className="p-2 rounded-md hover:bg-muted cursor-pointer"
                    onClick={() => {
                      onEditEvent(event)
                      setIsPopoverOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "h-3 w-3 rounded-full",
                          event.category === "work" && "bg-sky-500 dark:bg-sky-400",
                          event.category === "personal" && "bg-emerald-500 dark:bg-emerald-400",
                          event.category === "family" && "bg-violet-500 dark:bg-violet-400",
                          event.category === "holiday" && "bg-amber-500 dark:bg-amber-400",
                          event.category === "other" && "bg-slate-500 dark:bg-slate-400",
                        )}
                      />
                      <span className="font-medium">{event.title}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                    </div>
                    {event.description && <p className="text-xs mt-1 line-clamp-2">{event.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}

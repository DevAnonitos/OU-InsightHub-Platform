"use client"

import { DayCell } from "./DayCell"
import type { Event } from "@/types/calendar"

interface CalendarGridProps {
  days: {
    date: Date
    isCurrentMonth: boolean
    isToday: boolean
  }[]
  events: Event[]
  onAddEvent: (date: Date) => void
  onEditEvent: (event: Event) => void
}

export function CalendarGrid({ days, events, onAddEvent, onEditEvent }: CalendarGridProps) {
  // Group events by date
  const eventsByDate = events.reduce(
    (acc, event) => {
      const dateKey = event.start.toDateString()
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(event)
      return acc
    },
    {} as Record<string, Event[]>,
  )

  return (
    <div role="grid" className="grid grid-cols-7 border rounded-lg overflow-hidden bg-background" aria-label="Calendar">
      {/* Weekday headers */}
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div key={day} className="p-2 text-center font-medium border-b bg-muted/50">
          {day}
        </div>
      ))}

      {/* Calendar days */}
      {days.map((day, index) => {
        const dateKey = day.date.toDateString()
        const dayEvents = eventsByDate[dateKey] || []

        return (
          <DayCell
            key={index}
            date={day.date}
            events={dayEvents}
            isCurrentMonth={day.isCurrentMonth}
            isToday={day.isToday}
            onAddEvent={() => onAddEvent(day.date)}
            onEditEvent={onEditEvent}
          />
        )
      })}
    </div>
  )
}

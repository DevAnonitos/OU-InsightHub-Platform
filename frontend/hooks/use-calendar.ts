"use client"

import { useState } from "react"
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  addMonths,
  subMonths,
  isWithinInterval,
} from "date-fns"
import type { Event } from "@/types/calendar"

interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
}

interface CalendarFilters {
  category?: string
  dateRange?: {
    from: Date
    to: Date
  }
}

export function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const [allEvents, setAllEvents] = useState<Event[]>([])
  const [filters, setFilters] = useState<CalendarFilters>({})

  // Generate calendar days for the current month view
  const calendarDays = getCalendarDays(currentDate)

  // Navigation functions
  const navigateToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const navigateToPrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const navigateToToday = () => {
    setCurrentDate(new Date())
  }

  // Event management functions
  const addEvent = (event: Event) => {
    const newEvents = [...allEvents, event]
    setAllEvents(newEvents)
    applyFilters(filters, newEvents)
  }

  const updateEvent = (updatedEvent: Event) => {
    const newEvents = allEvents.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    setAllEvents(newEvents)
    applyFilters(filters, newEvents)
  }

  const deleteEvent = (eventId: string) => {
    const newEvents = allEvents.filter((event) => event.id !== eventId)
    setAllEvents(newEvents)
    applyFilters(filters, newEvents)
  }

  // Filter functions
  const filterEvents = (newFilters: CalendarFilters) => {
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const resetFilters = () => {
    setFilters({})
    setEvents(allEvents)
  }

  const applyFilters = (currentFilters: CalendarFilters, eventList: Event[] = allEvents) => {
    let filteredEvents = [...eventList]

    // Apply category filter
    if (currentFilters.category) {
      filteredEvents = filteredEvents.filter((event) => event.category === currentFilters.category)
    }

    // Apply date range filter
    if (currentFilters.dateRange?.from && currentFilters.dateRange?.to) {
      filteredEvents = filteredEvents.filter((event) =>
        isWithinInterval(event.start, {
          start: currentFilters.dateRange!.from,
          end: currentFilters.dateRange!.to,
        }),
      )
    }

    setEvents(filteredEvents)
  }

  return {
    currentDate,
    calendarDays,
    events,
    navigateToNextMonth,
    navigateToPrevMonth,
    navigateToToday,
    addEvent,
    updateEvent,
    deleteEvent,
    filterEvents,
    resetFilters,
  }
}

// Helper function to generate calendar days
function getCalendarDays(date: Date): CalendarDay[] {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }) // Start on Monday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd }).map((day) => ({
    date: day,
    isCurrentMonth: isSameMonth(day, date),
    isToday: isToday(day),
  }))
}

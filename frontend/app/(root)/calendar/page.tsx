"use client";

import { useState } from "react"
import type { Event } from "@/types/calendar";
import { useCalendar } from "@/hooks/use-calendar"

import { CalendarGrid } from "@/components/Calendars/CalendarGrid";
import { CalendarControls } from "@/components/Calendars/CalendarControl";

import React from 'react'

const CalendarPage = () => {

  const {
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
  } = useCalendar()
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleAddEvent = (date: Date) => {
    setSelectedDate(date)
    setSelectedEvent(null)
    setIsEventModalOpen(true)
  }

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event)
    setIsEventModalOpen(true)
  }

  const handleSaveEvent = (event: Event) => {
    if (selectedEvent) {
      updateEvent(event)
    } else {
      addEvent(event)
    }
    setIsEventModalOpen(false)
  }

  const handleDeleteEvent = (eventId: string) => {
    deleteEvent(eventId)
    setIsEventModalOpen(false)
  }

  return (
    <div className="flex flex-col w-full h-full min-h-[calc(100vh-8rem)] p-4 md:p-6 space-y-6">
      <div className="flex flex-col space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">Manage your schedule and view upcoming events</p>
      </div>

      <CalendarControls
        currentDate={currentDate}
        onPrevMonth={navigateToPrevMonth}
        onNextMonth={navigateToNextMonth}
        onToday={navigateToToday}
        onFilter={filterEvents}
        onReset={resetFilters}
      />

      <CalendarGrid 
        days={calendarDays} 
        events={events} 
        onAddEvent={handleAddEvent} 
        onEditEvent={handleEditEvent}
      />
    </div>
  )
}

export default CalendarPage
import { addDays, addHours, setHours, startOfDay, subDays } from "date-fns"
import type { Event } from "@/types/calendar"

// Generate random events for the calendar
export function generateMockEvents(baseDate: Date): Event[] {
  const categories = ["work", "personal", "family", "holiday", "other"]
  const events: Event[] = []

  // Generate events for the current month
  for (let i = 0; i < 20; i++) {
    const daysOffset = Math.floor(Math.random() * 30) - 15
    const eventDate = addDays(baseDate, daysOffset)
    const startHour = 9 + Math.floor(Math.random() * 8) // Between 9 AM and 5 PM
    const durationHours = 1 + Math.floor(Math.random() * 3) // 1-3 hours

    const start = setHours(startOfDay(eventDate), startHour)
    const end = addHours(start, durationHours)
    const category = categories[Math.floor(Math.random() * categories.length)]

    events.push({
      id: `event-${i}`,
      title: `Event ${i + 1}`,
      description: `This is a sample ${category} event.`,
      start,
      end,
      category,
    })
  }

  // Add some multi-day events
  events.push({
    id: "multi-day-1",
    title: "Conference",
    description: "Annual industry conference",
    start: setHours(startOfDay(subDays(baseDate, 2)), 9),
    end: setHours(startOfDay(addDays(baseDate, 2)), 17),
    category: "work",
  })

  events.push({
    id: "multi-day-2",
    title: "Vacation",
    description: "Family vacation",
    start: setHours(startOfDay(addDays(baseDate, 5)), 0),
    end: setHours(startOfDay(addDays(baseDate, 12)), 23),
    category: "family",
  })

  return events
}

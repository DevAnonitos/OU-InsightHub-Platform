"use client"

import React, { useMemo, lazy, Suspense } from "react"
import { cn } from "@/lib/utils"
import { vi } from "date-fns/locale"
import { format, parseISO } from "date-fns"
import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { timelineData, getTimelineByDecade } from "@/constants/timeline-data"

import {
  GraduationCap,
  Building,
  ScrollText,
  Settings,
  PartyPopper,
  CheckCircle,
  CalendarDays,
  Loader2,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Building,
  ScrollText,
  Settings,
  PartyPopper,
  CheckCircle,
  CalendarDays,
}

interface TimelineHistorySectionProps {
  title?: string
  description?: string
  showDecades?: boolean
}


const LazyTimelineContent = lazy(() =>
  Promise.resolve({
    default: ({ showDecades, timelineByDecade, formatDisplayDate, getIconComponent, shouldReduceMotion }: any) =>
      showDecades ? (
        // Timeline grouped by decades
        <div className="space-y-16">
          {timelineByDecade.map(({ decade, entries }: any) => (
            <div key={decade} className="relative">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 pl-4 border-l-4 border-primary">
                {decade}
              </h3>

              <div className="relative ml-4" role="list" aria-label={`Timeline của thập kỷ ${decade}`}>
                {/* Timeline center line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

                {entries.map((entry: any, idx: number) => (
                  <TimelineEntry
                    key={entry.date}
                    entry={entry}
                    idx={idx}
                    formatDisplayDate={formatDisplayDate}
                    getIconComponent={getIconComponent}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Timeline without decade grouping
        <div className="relative ml-4" role="list" aria-label="Timeline của lịch sử phát triển OU">
          {/* Timeline center line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {timelineData.map((entry, idx) => (
            <TimelineEntry
              key={entry.date}
              entry={entry}
              idx={idx}
              formatDisplayDate={formatDisplayDate}
              getIconComponent={getIconComponent}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      ),
  }),
)

const TimelineHistorySection: React.FC<TimelineHistorySectionProps> = React.memo(
  ({
    title = "Lịch sử hình thành và phát triển OU",
    description = "NHìn lại cuộc hành trình phát triển của Trường Đại học Mở TP. Hồ Chí Minh (HCMOU - Ho Chi Minh Open University) qua các cột mốc lịch sử quan trọng.",
    showDecades = true,
  }) => {
    const shouldReduceMotion = useReducedMotion()
    // Use useMemo to prevent recalculation on each render
    const timelineByDecade = useMemo(() => getTimelineByDecade(), [])

    // Format date for display - memoize this function to prevent recreation on each render
    const formatDisplayDate = useMemo(() => {
      return (isoDate: string): string => {
        const date = parseISO(isoDate)
        return format(date, "dd/MM/yyyy", { locale: vi })
      }
    }, [])

    // Optimized icon component getter
    const getIconComponent = useMemo(() => {
      return (iconName: string) => {
        // More efficient emoji detection
        if (iconName.length <= 2) {
          return <span className="text-xl">{iconName}</span>
        }

        const IconComponent = iconMap[iconName]
        return IconComponent ? <IconComponent className="h-5 w-5" /> : null
      }
    }, [])

    return (
      <section
        aria-labelledby="history-title"
        className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="history-title"
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            >
              {title}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{description}</p>
          </div>
          <LazyTimelineContent
            showDecades={showDecades}
            timelineByDecade={timelineByDecade}
            formatDisplayDate={formatDisplayDate}
            getIconComponent={getIconComponent}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </section>
    )
  },
)

interface TimelineEntryProps {
  entry: (typeof timelineData)[0]
  idx: number
  formatDisplayDate: (date: string) => string
  getIconComponent: (iconName: string) => React.ReactNode
  shouldReduceMotion: boolean | null
}

const TimelineEntry: React.FC<TimelineEntryProps> = React.memo(
  ({ entry, idx, formatDisplayDate, getIconComponent, shouldReduceMotion }) => {
    const animationSettings = useMemo(() => {
      return {
        initial: { opacity: 0, x: idx % 2 === 0 ? -20 : 20, y: 20 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        transition: {
          duration: shouldReduceMotion ? 0.2 : 0.6,
          ease: "easeOut",
          delay: shouldReduceMotion ? 0 : Math.min(idx * 0.1, 0.3), 
          willChange: "transform, opacity",
        },
        viewport: { once: true, amount: 0.2 },
      }
    }, [idx, shouldReduceMotion])

    return (
      <motion.div
        layoutId={`entry-${entry.date}`}
        {...animationSettings}
        role="listitem"
        className={cn(
          "relative mb-12 pb-2",
          "md:w-[calc(100%-4rem)]",
          idx % 2 === 0 ? "md:ml-8" : "md:ml-auto md:mr-8",
        )}
      >
        <div className="relative flex items-start gap-4">
          {/* Icon marker */}
          <div
            className={cn(
              "flex-shrink-0 flex items-center justify-center rounded-full text-white w-10 h-10 z-10",
              entry.color,
            )}
          >
            {getIconComponent(entry.icon)}
          </div>

          <Card
            className={cn(
              "flex-grow shadow-lg rounded-2xl border-gray-100 dark:border-gray-800",
              "hover:shadow-xl transition-all duration-300",
              "backdrop-blur-sm bg-white/90 dark:bg-gray-800/90",
            )}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{entry.title}</h3>
                <time
                  dateTime={entry.date}
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                >
                  {formatDisplayDate(entry.date)}
                </time>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{entry.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Connector line to next item (except for last item) */}
        <div className="absolute left-5 top-10 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700" />
      </motion.div>
    )
  },
)

TimelineEntry.displayName = "TimelineEntry"
TimelineHistorySection.displayName = "TimelineHistorySection"

export default TimelineHistorySection

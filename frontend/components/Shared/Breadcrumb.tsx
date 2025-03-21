"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

import { cn } from "@/lib/utils"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom labels for path segments
   * e.g. { "dashboard": "Dashboard", "settings": "Settings" }
   */
  segmentLabels?: Record<string, string>
  /**
   * Show home icon at the beginning
   */
  showHomeIcon?: boolean
  /**
   * Custom home label
   */
  homeLabel?: string
}

export default function Breadcrumb({
  segmentLabels = {},
  showHomeIcon = true,
  homeLabel = "Home",
  className,
  ...props
}: BreadcrumbProps) {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on home page
  if (pathname === "/") {
    return null
  }

  // Split pathname into segments and remove empty strings
  const segments = pathname.split("/").filter(Boolean)

  // Generate breadcrumb items with paths
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`

    // Check if this is a dynamic route segment (starts with [)
    const isDynamicSegment = segment.startsWith("[") && segment.endsWith("]")

    // Use custom label from segmentLabels, or format the segment name
    let label = segmentLabels[segment] || segment

    // Format dynamic segments nicely (remove brackets and capitalize)
    if (isDynamicSegment) {
      const cleanSegment = segment.slice(1, -1) // Remove [ and ]
      label = segmentLabels[cleanSegment] || cleanSegment
    }

    // Capitalize first letter if not already formatted
    if (label === segment || (isDynamicSegment && label === segment.slice(1, -1))) {
      label = label.charAt(0).toUpperCase() + label.slice(1)
    }

    // Check if this is the last segment (current page)
    const isCurrentPage = index === segments.length - 1

    return {
      label,
      path,
      isCurrentPage,
    }
  })

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm", className)} {...props}>
      <ol className="flex items-center space-x-1.5">
        {/* Home item */}
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label={homeLabel}
          >
            {showHomeIcon ? <Home className="h-4 w-4" /> : homeLabel}
          </Link>
        </li>

        {/* Separator after home */}
        {breadcrumbItems.length > 0 && (
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          </li>
        )}

        {/* Path segments */}
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <li className="flex items-center">
              {item.isCurrentPage ? (
                <span className="font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.path} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              )}
            </li>

            {/* Add separator between items, but not after the last item */}
            {index < breadcrumbItems.length - 1 && (
              <li className="flex items-center">
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}


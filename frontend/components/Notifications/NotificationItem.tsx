"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Notification } from "@/types/notification"
import { MessageSquare, RefreshCw, CheckSquare, MessageCircle, AlertCircle } from "lucide-react"

interface NotificationItemProps {
  notification: Notification
  markAsRead: (id: string) => void
};

export const NotificationItem = ({ notification, markAsRead }: NotificationItemProps) => {
  const getIcon = () => {
    switch (notification.type) {
      case "message":
        return <MessageSquare className="h-4 w-4" />
      case "update":
        return <RefreshCw className="h-4 w-4" />
      case "task":
        return <CheckSquare className="h-4 w-4" />
      case "comment":
        return <MessageCircle className="h-4 w-4" />
      case "system":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const handleMarkAsRead = () => {
    markAsRead(notification.id)
  }

  return (
    <div
      className={`flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors ${
        !notification.read ? "bg-muted/30" : ""
      }`}
    >
      <Avatar className="h-9 w-9">
        <AvatarImage src={notification.avatar || "/placeholder.svg"} alt={notification.title} />
        <AvatarFallback className="bg-primary/10 text-primary">{getIcon()}</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-1">
        <div className="flex items-start justify-between">
          <p className={`text-sm font-medium ${!notification.read ? "font-semibold" : ""}`}>{notification.title}</p>
          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{notification.time}</span>
        </div>
        <p className="text-xs text-muted-foreground">{notification.description}</p>
      </div>

      {!notification.read && (
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={handleMarkAsRead}>
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="sr-only">Mark as read</span>
        </Button>
      )}
    </div>
  )
}

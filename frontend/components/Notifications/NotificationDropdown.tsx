"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell } from "lucide-react"
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion"
import NotificationContainer from "./NotificationContainer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import type { Notification } from "@/types/notification";

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New message",
    description: "You have a new message from Sarah",
    time: "5 minutes ago",
    read: false,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "message",
  },
  {
    id: "2",
    title: "Project update",
    description: "Your project 'Dashboard UI' has been updated",
    time: "1 hour ago",
    read: false,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "update",
  },
  {
    id: "3",
    title: "Task completed",
    description: "Task 'Create notification component' has been completed",
    time: "2 hours ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "task",
  },
  {
    id: "4",
    title: "New comment",
    description: "John commented on your post",
    time: "5 hours ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "comment",
  },
  {
    id: "5",
    title: "System update",
    description: "System will be updated at midnight",
    time: "1 day ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "system",
  },
  {
    id: "6",
    title: "New follower",
    description: "Alex started following you",
    time: "1 day ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "message",
  },
  {
    id: "7",
    title: "Security alert",
    description: "Unusual login detected from new location",
    time: "2 days ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "system",
  },
  {
    id: "8",
    title: "Subscription renewal",
    description: "Your subscription will renew in 3 days",
    time: "2 days ago",
    read: false,
    avatar: "/placeholder.svg?height=40&width=40",
    type: "system",
  },
]

export const NotificationDropdown = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [open, setOpen] = useState(false)

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const handleViewAll = () => {
    console.log("View all notifications clicked")
    router.push("/notifications")
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuContent forceMount asChild align="end" className="w-80 md:w-96 p-0">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <NotificationContainer
                notifications={notifications}
                markAsRead={markAsRead}
                markAllAsRead={markAllAsRead}
                onViewAll={handleViewAll}
              />
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  )
}

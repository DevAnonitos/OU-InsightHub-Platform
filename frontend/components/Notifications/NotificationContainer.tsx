"use client";

import React from 'react';
import { Button } from '../ui/button';
import { motion } from "framer-motion";
import { NotificationItem } from './NotificationItem';
import type { Notification } from "@/types/notification";

interface NotificationContainerProps {
  notifications: Notification[]
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  onViewAll: () => void
}


const NotificationContainer = ({
  notifications,
  markAsRead,
  markAllAsRead,
  onViewAll,
}: NotificationContainerProps) => {

  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex flex-col">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <p className="text-xs text-muted-foreground">
              You have {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
            Mark all as read
          </Button>
        )}
      </div>

      {/* List */}
      <div className="h-[300px] md:h-[400px] overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="flex flex-col">
            {notifications.map((notification, idx) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
              >
                <NotificationItem notification={notification} markAsRead={markAsRead} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full p-4">
            <p className="text-muted-foreground text-sm">No notifications</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-2 border-t">
        <Button variant="outline" size="sm" className="w-full text-xs" onClick={onViewAll}>
          View all notifications
        </Button>
      </div>
    </div>
  )
}

export default NotificationContainer
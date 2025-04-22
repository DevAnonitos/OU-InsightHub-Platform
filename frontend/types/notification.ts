export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  avatar: string;
  type: "message" | "update" | "task" | "comment" | "system";
};
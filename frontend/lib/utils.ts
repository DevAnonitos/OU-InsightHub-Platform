import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};

export const getRandomColor = (): string => {
  // Danh sách các màu sắc đẹp và hiện đại
  const colors = [
    "#FF6F61",  // Coral
    "#6B8E23",  // Olive Green
    "#87CEEB",  // Sky Blue
    "#FFD700",  // Gold
    "#FF6347",  // Tomato Red
    "#48C9B0",  // Turquoise
    "#F39C12",  // Sunflower Yellow
    "#9B59B6",  // Amethyst
    "#E74C3C",  // Alizarin
    "#1ABC9C",  // Strong Turquoise
    "#3498DB",  // Peter River
    "#F1C40F",  // Yellow
    "#2ECC71",  // Emerald
    "#34495E",  // Wet Asphalt (Dark Gray)
    "#16A085",  // Green Sea
  ];

  // Lấy màu ngẫu nhiên từ mảng
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
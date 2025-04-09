import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

declare global {
  var prisma: any;
};

const prismaConfig = global.prisma || new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
}).$extends(
  withOptimize({
    apiKey: process.env.OPTIMIZE_API_KEY || "",
  })
);

// chỉ lưu vào global khi dev để hot‑reload không tạo thêm client
if (process.env.NODE_ENV !== "production") {
  global.prisma = prismaConfig;
}

export default prismaConfig;

import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

const prismaConfig = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
}).$extends(
  withOptimize({
    apiKey: process.env.OPTIMIZE_API_KEY || "",
  })
);

export default prismaConfig;

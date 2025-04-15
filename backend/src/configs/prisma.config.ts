import { PrismaClient, Prisma } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

export const prismaConfigs: Prisma.PrismaClientOptions = {
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: "pretty",
};

export const prisma = new PrismaClient(prismaConfigs).$extends(
  withOptimize({
    apiKey: process.env.OPTIMIZE_API_KEY || "",
  }),
);


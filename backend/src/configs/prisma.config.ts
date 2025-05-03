import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";


type PrismaClientOptions = ConstructorParameters<typeof PrismaClient>[0]

export const prismaConfigs: PrismaClientOptions = {
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: "pretty",
};

export const prisma = new PrismaClient(prismaConfigs).$extends(
  withOptimize({
    apiKey: process.env.OPTIMIZE_API_KEY || "",
  }),
);


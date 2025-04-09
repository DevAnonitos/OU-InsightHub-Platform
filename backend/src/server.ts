import app from "./app";
import http from "http";
import { IServer } from "./interfaces";
import prismaConfig from "./configs/prisma.config";

const configs: IServer = {
  port: Number(process.env.PORT) || 4000,
};

export async function startServer(): Promise<void> {
  try {
    await prismaConfig.$connect();
    console.log("🔌 Prisma is connected to database");

    const server = http.createServer(app);

    server.listen(configs.port, () => {
      console.log(`[server]: Server is running at http://localhost:${configs.port}`);
    });

    const gracefulShutdown = async () => {
      console.log("🛑 Shutting down...");
      await prismaConfig.$disconnect();
      process.exit(0);
    };
    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);

  } catch (error) {
    console.error("❌ Unable to connect Prisma:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

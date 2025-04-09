import os from "os";
import cluster from "cluster";
import { startServer } from "./server";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`[Primary ${process.pid}]: Starting ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`[Primary ${process.pid}]: Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  console.log(`[Worker ${process.pid}]: Started`);
  startServer();
}
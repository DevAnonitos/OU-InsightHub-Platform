import os from "os";
import cluster from "cluster";
import { startServer } from "./server";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`[Primary ${process.pid}]: Starting ${numCPUs} workers...`);

  // Fork worker cho mỗi CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Lắng nghe sự kiện exit của worker và khởi động lại nếu cần
  cluster.on("exit", (worker, code, signal) => {
    console.log(`[Primary ${process.pid}]: Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker process: chạy server
  console.log(`[Worker ${process.pid}]: Started`);
  startServer();
}
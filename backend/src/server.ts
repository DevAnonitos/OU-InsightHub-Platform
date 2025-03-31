import http from "http";
import app from "./app";
import { IServer } from "./interfaces";

const configs: IServer = {
    port: process.env.PORT || 4000,
};

export function startServer(): void {
    const server = http.createServer(app);

    server.listen(configs, () => {
        console.log(`[server]: Server is running at http://localhost:${configs.port}`);
    });     
};

if(require.main === module) {
    startServer();
}

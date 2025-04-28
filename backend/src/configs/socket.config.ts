import { Socket, Server, ServerOptions } from "socket.io";

export const socketConfig: Partial<ServerOptions> = {
    allowUpgrades: true,
    pingTimeout: 30000,
    pingInterval: 10000,
    connectTimeout: 45000,
    maxHttpBufferSize: 1e6,
    httpCompression: true,
    cleanupEmptyChildNamespaces: true,
    transports: ['websocket', 'polling'],
    connectionStateRecovery: {
        maxDisconnectionDuration: 2 * 60 * 1000,
        skipMiddlewares: true, 
    },

};
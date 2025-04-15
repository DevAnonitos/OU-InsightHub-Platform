import Redis, { RedisOptions } from "ioredis";

export const redisConfig: RedisOptions= {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD || undefined,
    connectionName: "ou-insight-hub",
    connectTimeout: 10000,
    maxRetriesPerRequest: 3,
    keepAlive: 0,   
    noDelay: true, 
    lazyConnect: true,
    monitor: true,
    enableAutoPipelining: true, 
    autoPipeliningIgnoredCommands: ["info", "ping"], 
};

export const redisClient = new Redis(redisConfig);

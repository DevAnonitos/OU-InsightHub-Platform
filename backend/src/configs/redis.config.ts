import Redis, { RedisOptions } from "ioredis";

export const redisConfig: RedisOptions = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD || undefined,
    connectionName: "ou-insight-hub",
    connectTimeout: 5000, // Reduced timeout for faster failure detection
    maxRetriesPerRequest: 5, // Increased retries for better reliability
    noDelay: true,
    lazyConnect: true,
    enableAutoPipelining: true,
    autoPipeliningIgnoredCommands: ["info", "ping", "multi", "exec"],
    retryStrategy: (times: number) => {
        const delay = Math.min(times * 50, 2000); // Exponential backoff with max 2s delay
        return delay;
    },
    reconnectOnError: (err: Error) => {
        const targetError = 'READONLY';
        if (err.message.includes(targetError)) {
            return true; // Reconnect for READONLY errors
        }
        return false;
    }
};

export const redisClient = new Redis(redisConfig);

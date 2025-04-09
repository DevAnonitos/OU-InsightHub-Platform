import Redis from "ioredis";
import { IRedisConfig } from "../interfaces";

export const redisConfig:IRedisConfig = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD || undefined,
};

const redisClient = new Redis(redisConfig);

export default redisClient;
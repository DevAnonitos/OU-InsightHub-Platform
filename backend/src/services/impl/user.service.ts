import { redisClient } from "@/configs/redis.config";
import { userRepository } from "@/repositories/user.repository";

class UserService {
    async getUsers() {
        return userRepository.findAll();
    }

    async getCurrentUser (userId: string) {
        const cacheKey = `user:${userId}`;

        const cachedUser = await redisClient.get(cacheKey);
        if (cachedUser) {
            console.log("Cache hit for user:", userId);
            return JSON.parse(cachedUser);
        }

        const user = await userRepository.findById(userId);
        if (!user) throw new Error("User not found");

        await redisClient.set(cacheKey, JSON.stringify(user), 'EX', 60 * 60 * 24);

        return user;
    }

    async updateUser (userId: string) {
        
    }

    async deleteUser (userId: string) {
        const user = await userRepository.findById(userId);
        if (!user) throw new Error("User not found");
        return userRepository.removeById(userId);
    }

    async deleteUsers () {

    }

    async updateAvatar () {

    }
};

export default new UserService();
import { userRepository } from "@/repositories/user.repository";

class UserService {
    async getUsers() {
       return userRepository.findAll();
    }

    async getCurrentUser (userId: string) {
        const user = await userRepository.findById(userId);
        if (!user) throw new Error("User not found");
        return user;
    }

    async updateUser () {
        
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
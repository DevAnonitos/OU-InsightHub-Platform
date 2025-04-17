import { prisma } from "@/configs/prisma.config";

class UserService {
    async getUsers() {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    username: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            return users;
        } catch (error: any) {
            throw new Error("Error fetching users: " + error.message);
        }
    }

    async getCurrentUser () {

    }

    async updateUser () {
        
    }

    async deleteUser () {

    }

    async updateAvatar () {

    }
};

export default new UserService();
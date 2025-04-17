import { prisma } from "@/configs/prisma.config";
import { hashPassword, comparePassword } from "@/libs/utils/bcrypt.util";

class AuthService { 
    async createNewAccount(email: string, username: string, password: string) {
        
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new Error("User already exists with this email.");
        }

        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        return user;
    }

    async loginAccount(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new Error("User not found.");
        }

        if (!user.password) {
            throw new Error("User has no password set.");
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password.");
        }

        return user;
    }

    async google(googleId: string) {
        // Logic for handling Google sign-in can be added here
        // For example, find or create a user based on the googleId
        const user = await prisma.user.findUnique({
            where: { googleId },
        });

        if (!user) {
            // Create a new user if not found
            // const newUser = await prismaConfig.user.create({
            //     data: {
            //         googleId,
            //         // Additional user data can be added here
            //     },
            // });
            // return newUser;
        }

        return user;
    }

    async refreshToken () {

    }

    async forgotPassword () {

    }

    async resetPassword () {
        
    }

    async logOutAccount(userId: string) {
        // Logic for logging out can be implemented here
        // For example, invalidate the user's session or token
        return { message: "User logged out successfully." };
    }
};

export default new AuthService();
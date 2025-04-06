import prisma from "../configs/prisma.config";
import { hashPassword, comparePassword } from "../libs/utils/bcrypt.util";

class AuthService { 
    async signUp() {
        return;
    }

    async signIn() {
        return;
    }

    async google() {
        return;
    }

    async signOut() {
        return;
    }
};

export default new AuthService();
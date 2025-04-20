import { ERole } from "@/enums/role.enum";
import roleService from "./role.service";
import tokenService from "./token.service";
import { TokenPayLoadDTO } from "@/dtos/token.dto";

import { SignInDTO, SignUpDTO } from "@/dtos/auth.dto";
import { userRepository } from "@/repositories/user.repository";
import { hashPassword, comparePassword } from "@/libs/utils/bcrypt.util";

class AuthService { 
    async createNewAccount(data: SignUpDTO) {
        const existingUser = await userRepository.findByEmail(data.email);
        if(existingUser) throw new Error("User is exist!")
        const hashedPassword = await hashPassword(data.password);
    
        const user = await userRepository.create({
            ...data,
            password: hashedPassword,
        });

        await roleService.assignRoleToUser(user.id, ERole.USER);

        const roles = await roleService.getUserRoles(user.id);

        const payload: TokenPayLoadDTO = {
            id: user.id,
            email: user.email,
            roles,
        };

        const tokens = await tokenService.createToken(payload);

        return {
            user: {
                ...user,
                roles,
            },
            tokens,
        };
    };

    async loginAccount(data: SignInDTO) {
        const user = await userRepository.findByEmail(data.email);
        if(!user || !user.password) throw new Error("User not found");

        const isPasswordValid = await comparePassword(data.password, user.password);
        if(!isPasswordValid) throw new Error("Invalid password");
        
        const roles = await roleService.getUserRoles(user.id);

        const payload: TokenPayLoadDTO = {
            id: user.id,
            email: user.email,
            roles,
        };

        const tokens = await tokenService.createToken(payload);

        return {
            user: {
                ...user,
                roles,
            },
            tokens,
        };
    };

    async google(googleId: string) {
        
    };

    async refreshToken () {

    };

    async forgotPassword () {

    };

    async resetPassword () {
        
    };

    async logOutAccount(userId: string) {
        return { message: "User logged out successfully." };
    }
};

export default new AuthService();
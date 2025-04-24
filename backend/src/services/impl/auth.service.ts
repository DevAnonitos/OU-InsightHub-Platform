import { ERole } from "@/enums/role.enum";

import roleService from "./role.service";
import tokenService from "./token.service";
import { userRepository } from "@/repositories/user.repository";

import { TokenPayLoadDTO } from "@/dtos/token.dto";
import { SignInDTO, SignUpDTO } from "@/dtos/auth.dto";

import { 
    generateGoogleAuthUrl, 
    verifyGoogleIdToken, 
    exchangeCodeForTokens 
} from "@/libs/utils/google.util";
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

    async googleAuthUrl () {
        return generateGoogleAuthUrl();
    }

    async googleLoginAccount(code: string) {
        const tokens = await exchangeCodeForTokens(code);
        const payload = await verifyGoogleIdToken(tokens?.id_token!);

        const { email, name, picture, sub } = payload;

        let user = await userRepository.findByEmail(email!);
        if(!user) {
            user = await userRepository.create({
                email,
                username: name,
                avatarUrl: picture,
                googleId: sub,
            });

            await roleService.assignRoleToUser(user.id, ERole.USER);
        }

        const roles = await roleService.getUserRoles(user.id);
        const tokenPayload: TokenPayLoadDTO = {
            id: user.id,
            email: user.email,
            roles,
        };

        const appTokens = tokenService.createToken(tokenPayload);
    
        return {
            user: {
                ...user,
                roles,
            },
            tokens: appTokens,  
        };
    };

    async refreshToken (token: string) {
        const tokens = await tokenService.refreshTokens(token);
        return tokens;
    };

    async forgotPassword () {

    };

    async resetPassword () {
        
    };

    async logOutAccount() {
        return { message: "User logged out successfully." };
    }
};

export default new AuthService();
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

        const payload: TokenPayLoadDTO = {
            id: user.id,
            email: user.email,
        };

        const tokens = await tokenService.createToken(payload);

        return {
            user,
            tokens,
        };
    };

    async loginAccount(data: SignInDTO) {

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
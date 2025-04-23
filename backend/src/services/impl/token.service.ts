import { TokenPayLoadDTO } from "@/dtos/token.dto";
import { generateToken, verifyToken, refreshToken } from "@/libs/utils/token.utils";

class TokenService {
    createToken (payload: TokenPayLoadDTO) {
        return generateToken(payload);
    };

    verifyToken (token: string, type: "access" | "refresh") {
        return verifyToken(token, type);
    };

    refreshTokens (token: string) {
        return refreshToken(token);
    };

    revokeToken () {
        
    }
};

export default new TokenService();
import { TokenPayLoadDTO } from "@/dtos/token.dto";
import { generateToken, verifyToken } from "@/libs/utils/token.utils";

class TokenService {
    createToken (payload: TokenPayLoadDTO) {
        return generateToken(payload);
    }

    verifyToken () {
        
    }

    refreshTokens () {
        
    }

    revokeToken () {
        
    }
};

export default new TokenService();
import { 
  generateAccessToken, 
  generateRefreshToken, 
  verifyAccessToken, 
  verifyRefreshToken,
} from "@/helpers/token.helper";

export const generateToken = (payload: object) => {
  const accessToken = generateAccessToken();
  const refreshToken = generateRefreshToken();

  return {
    accessToken,
    refreshToken,
  };
};

export const verifyToken =  (token: string) => {
  
  return;
};

// export const refreshAccesToken = () => {
//   try {
    
//   } catch (error: any) {
//     return null;
//   }
// };
import { 
  generateAccessToken, 
  generateRefreshToken, 
  verifyAccessToken, 
  verifyRefreshToken,
} from "@/helpers/token.helper";

export const generateToken = (payload: object) => {
  const accessToken = generateAccessToken({ payload });
  const refreshToken = generateRefreshToken({ payload });

  return {
    accessToken,
    refreshToken,
  };
};

export const verifyToken =  (token: string, type: "access" | "refresh") => {
  if (type === "access") {
    return verifyAccessToken(token);
  } else {
    return verifyRefreshToken(token);
  }
};

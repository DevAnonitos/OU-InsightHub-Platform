import { ITokenConfig } from "../interfaces";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN! ;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;
const ACCESS_TOKEN_EXPIRIES = "7d";
const REFRESH_TOKEN_EXPIRIES = "30d";

export const tokenConfig: ITokenConfig = {
  accessToken: ACCESS_TOKEN,
  refreshToken: REFRESH_TOKEN,
  accessOptions: { 
    expiresIn: ACCESS_TOKEN_EXPIRIES,
    audience: "access",
    issuer: "user",
    algorithm: "HS256",
  },
  refreshOptions: { 
    expiresIn: REFRESH_TOKEN_EXPIRIES, 
    audience: "refresh",
    issuer: "user",
    algorithm: "HS256",
  },
};
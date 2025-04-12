import { ITokenConfig } from "../interfaces";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN! as string;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN! as string;
const ACCESS_TOKEN_EXPIRIES = process.env.ACCESS_TOKEN_EXPIRY! || "7d" as string;
const REFRESH_TOKEN_EXPIRIES = process.env.REFRESH_TOKEN_EXPIRY! || "30d" as string;

export const tokenConfig: ITokenConfig = {
  accessToken: ACCESS_TOKEN,
  refreshToken: REFRESH_TOKEN,
  accessOptions: ACCESS_TOKEN_EXPIRIES,
  refreshOptions: REFRESH_TOKEN_EXPIRIES,
};
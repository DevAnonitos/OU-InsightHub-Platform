import { ITokenConfig } from "../interfaces";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN as string;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN as string;

export const tokenConfig: ITokenConfig = {
  accessToken: ACCESS_TOKEN,
  refreshToken: REFRESH_TOKEN,
};
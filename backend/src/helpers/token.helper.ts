import jwt, { JwtPayload } from "jsonwebtoken";
import { tokenConfig } from "@/configs/token.config";

interface ITokenConfig {
  payload: object;
};

const { accessToken, refreshToken, accessOptions, refreshOptions } = tokenConfig;

export const generateAccessToken = ({ payload }: ITokenConfig): string => {
  return jwt.sign(payload, accessToken as string, accessOptions);
};

export const generateRefreshToken = ({ payload }: ITokenConfig): string => {
  return jwt.sign(payload, refreshToken as string, refreshOptions);
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, accessToken, {
    issuer: accessOptions?.issuer,
    audience: accessOptions?.audience,
    algorithms: [accessOptions?.algorithm!]
  }) as JwtPayload;
};

export const verifyRefreshToken = (token: string): JwtPayload => {
  return jwt.verify(token, refreshToken, {
    issuer: refreshOptions?.issuer,
    audience: refreshOptions?.audience,
    algorithms: [refreshOptions?.algorithm!]
  }) as JwtPayload;
};


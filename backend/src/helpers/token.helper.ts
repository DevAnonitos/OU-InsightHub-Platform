import { tokenConfig } from "../configs/token.config";
import jwt, { SignOptions, JwtPayload, VerifyOptions } from "jsonwebtoken";

interface ITokenConfig {
  payload: object;
};

const { accessToken, refreshToken, accessOptions, refreshOptions } = tokenConfig;

export const generateAccessToken = ({ payload }: ITokenConfig): string => {
  return jwt.sign(payload, accessToken);
};

export const generateRefreshToken = ({ payload }: ITokenConfig): string => {
  return jwt.sign(payload, refreshToken);
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify;
};

export const verifyRefreshToken = (token: string): JwtPayload => {
  return jwt.verify;
};


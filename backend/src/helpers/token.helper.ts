import jwt, { SignOptions, JwtPayload, VerifyOptions } from "jsonwebtoken";

interface ITokenConfig {
  payload: object;
  options: SignOptions;
};

export const generateAccessToken = ({ payload, options }: ITokenConfig) => {
  return;
};

export const generateRefreshToken = ({ payload, options }: ITokenConfig) => {
  return;
};

export const verifyAccessToken = () => {
  return;
};

export const verifyRefreshToken = () => {
  return;
};


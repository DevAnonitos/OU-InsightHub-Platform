import jwt, { SignOptions, JwtPayload, VerifyOptions } from "jsonwebtoken";
import { tokenConfig } from "../configs/token.config";

interface ITokenConfig {
  payload: object;
  options?: SignOptions;
};

export const generateAccessToken = ({ payload, options }: ITokenConfig) => {
  return;
};

export const generateRefreshToken = ({ payload, options }: ITokenConfig) => {
  
};

export const verifyAccessToken = () => {
  
};

export const verifyRefreshToken = () => {
  
};


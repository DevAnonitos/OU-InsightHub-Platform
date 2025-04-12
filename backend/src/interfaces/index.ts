import { SignOptions } from "jsonwebtoken";

export interface IServer {
    port: number | string
};

export interface ITokenConfig {
    accessToken: string;
    refreshToken: string;
    accessOptions: SignOptions;
    refreshOptions: SignOptions;
}

export interface IRedisConfig {
    host: string;
    port: number;
    password?: string;
}

export interface IResponseData<T = any> {
    status: number;
    message: string;
    data?: T;
};

export interface IOriginCallback {
    
}; 

export interface IUser {

};
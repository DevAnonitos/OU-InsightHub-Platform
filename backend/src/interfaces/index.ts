import { SignOptions } from "jsonwebtoken";

export interface IServer {
    port: number | string
};

export interface ITokenConfig {
    accessToken: string;
    refreshToken: string;
    accessOptions?: SignOptions;
    refreshOptions?: SignOptions;
};

export interface IRedisConfig {
    host: string;
    port: number;
    password?: string;
};

export interface IResponseData<T = any> {
    status: number;
    message: string;
    data?: T;
};

export interface IEmailTemplateParams {
    projectName: string;
    projectUrl: string;
    projectLogoUrl: string;
    recipientName?: string;
    otpCode: string;
    expiresInMinutes: number;
    supportEmail: string;
    footerText?: string;
};

export interface IEmailContent {
    subject: string;
    text: string;
    html: string;
};

export interface IOriginCallback {
    
}; 

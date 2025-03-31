export interface IServer {
    port: number | string
};

export interface ITokenConfig {
    accessToken: string;
    refreshToken: string;
}

export interface IRedisConfig {
    host: string;
    port: number;
    password?: string;
}

export interface IResponseData {
    status: number;
    message: string;
    data?: any;
};

export interface IOriginCallback {
    
}; 

export interface IUser {

};
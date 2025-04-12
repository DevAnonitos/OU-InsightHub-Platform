import { Request, Response } from "express";
import authService from "../services/impl/auth.service";
import { responseHandler } from "../handlers/response.handler";

export const signIn = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        console.log(error.message);
        return responseHandler.unauthorized(res, error.message);
    }
};

export const signUp = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        console.log(error.message);
        return responseHandler.badRequest(res, error.message);
    }
};

export const google = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        return;
    }
};

export const signOut = async (req: Request, res: Response) => {
    try {
       
    } catch (error: any) {
        return responseHandler.serverError(res, error);
    }
};